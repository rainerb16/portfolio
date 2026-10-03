<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Layer } from '../../data/layers';
import type { StackScene } from './stackScene';

const props = defineProps<{ layers: Layer[] }>();

const canvas = ref<HTMLCanvasElement | null>(null);
const hover = ref<number | null>(null);
const selected = ref<number | null>(null);
const paused = ref(false);
const noWebgl = ref(false);
let scene: StackScene | null = null;

const focus = computed(() => selected.value ?? hover.value);
const active = computed(() => (focus.value === null ? null : props.layers[focus.value]));
const buttons = computed(() => props.layers.map((layer, index) => ({ layer, index })).reverse());
const announce = computed(() =>
  selected.value === null
    ? ''
    : `${props.layers[selected.value].name} layer selected. ${props.layers[selected.value].description}`,
);

function toggle(index: number) {
  selected.value = selected.value === index ? null : index;
}

onMounted(async () => {
  const el = canvas.value;
  const hero = el?.closest('section');
  if (!el || !hero) return;
  const { hasWebGL, createStackScene } = await import('./stackScene');
  if (!hasWebGL()) {
    noWebgl.value = true;
    return;
  }
  try {
    scene = createStackScene({
      canvas: el,
      hero,
      layers: props.layers,
      reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      getState: () => ({ hover: hover.value, selected: selected.value, paused: paused.value }),
      onHover: (i) => (hover.value = i),
      onSelect: (i) => (selected.value = i),
    });
  } catch {
    noWebgl.value = true;
  }
});

onBeforeUnmount(() => scene?.dispose());
</script>

<template>
  <div class="stage">
    <canvas ref="canvas" class="canvas" aria-hidden="true"></canvas>
    <p class="sr-only">
      An interactive 3D diagram of four stacked layers: apps, services and APIs, queues and events, and data.
      Use the layer buttons to learn about each one.
    </p>
    <div v-if="noWebgl" class="fallback" aria-hidden="true">
      <div class="fallback-stack">
        <div
          v-for="(layer, i) in [...layers].reverse()"
          :key="layer.short"
          :class="['slab', `slab--${i}`, `slab--${layer.accent}`]"
        ></div>
      </div>
    </div>
  </div>

  <div class="panel-wrap">
    <p class="sr-only" aria-live="polite">{{ announce }}</p>
    <div class="controls">
      <div class="buttons" role="group" aria-label="Architecture layers">
        <button
          v-for="b in buttons"
          :key="b.layer.short"
          type="button"
          :class="['layer-btn', { 'layer-btn--on': selected === b.index }]"
          :aria-pressed="selected === b.index"
          @click="toggle(b.index)"
        >
          {{ b.layer.short }}
        </button>
      </div>
      <button type="button" class="layer-btn pause-btn" @click="paused = !paused">
        <span aria-hidden="true">{{ paused ? '▶ ' : '❚❚ ' }}</span
        >{{ paused ? 'Play animation' : 'Pause animation' }}
      </button>
    </div>
    <div class="panel">
      <template v-if="active">
        <span class="panel-label">LAYER {{ (focus ?? 0) + 1 }} / {{ layers.length }}</span>
        <strong class="panel-title">{{ active.name }}</strong>
        <span class="panel-text">{{ active.description }}</span>
        <a class="textlink panel-link" :href="active.href"
          >{{ active.linkText }}<span aria-hidden="true">&nbsp;→</span></a
        >
      </template>
      <template v-else>
        <span class="panel-label panel-label--blue">LAYERS I WORK ACROSS</span>
        <span class="panel-text">Drag to rotate. Click a layer to see what it does.</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.stage {
  position: absolute;
  inset: 0;
}

.canvas {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: pan-y;
  cursor: grab;
}

.fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12%;
  pointer-events: none;
}

.fallback-stack {
  position: relative;
  width: 300px;
  height: 360px;
}

.slab {
  position: absolute;
  left: 50px;
  width: 200px;
  height: 200px;
  border: 1px solid var(--blue);
  background: rgb(99 199 255 / 0.06);
  transform: rotateX(60deg) rotateZ(45deg);
}

.slab--coral {
  border-color: var(--coral);
  background: rgb(255 122 107 / 0.08);
}

.slab--0 {
  top: 0;
}
.slab--1 {
  top: 60px;
}
.slab--2 {
  top: 120px;
}
.slab--3 {
  top: 180px;
}

.panel-wrap {
  position: absolute;
  right: max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)));
  bottom: 40px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 340px;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 148px;
  padding: 18px 20px;
  background: rgb(13 18 28 / 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--line-2);
  border-radius: 16px;
}

.panel-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--coral);
}

.panel-label--blue {
  color: var(--blue);
}

.panel-title {
  font-family: var(--font-display);
  font-size: 1.3125rem;
  font-weight: 700;
}

.panel-text {
  font-size: 0.875rem;
  line-height: 1.55;
  color: var(--text-2);
}

.panel-link {
  align-self: flex-start;
  margin-top: 2px;
  font-size: 0.875rem;
  font-weight: 600;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.layer-btn {
  min-height: var(--tap);
  padding: 0 16px;
  border: 1px solid var(--line-3);
  border-radius: 999px;
  background: rgb(13 18 28 / 0.82);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.layer-btn:hover {
  border-color: var(--blue);
}

.layer-btn--on {
  border-color: var(--coral);
  background: var(--coral);
  color: var(--on-coral);
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pause-btn {
  color: var(--text-2);
}

@media (max-width: 960px) {
  .stage {
    position: relative;
    inset: auto;
    order: 2;
    height: 420px;
  }

  .fallback {
    justify-content: center;
    padding-right: 0;
  }

  .panel-wrap {
    position: relative;
    right: auto;
    bottom: auto;
    order: 3;
    width: auto;
    max-width: 420px;
    margin: 0 var(--gutter) 56px;
  }
}
</style>
