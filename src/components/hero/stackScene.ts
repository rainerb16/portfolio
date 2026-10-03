import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  EdgesGeometry,
  Float32BufferAttribute,
  GridHelper,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Raycaster,
  Scene,
  Vector2,
  Vector3,
  WebGLRenderer,
  type Material,
} from 'three';
import type { Layer } from '../../data/layers';

export interface SceneState {
  hover: number | null;
  selected: number | null;
  paused: boolean;
}

export interface StackScene {
  dispose(): void;
}

interface Options {
  canvas: HTMLCanvasElement;
  hero: HTMLElement;
  layers: Layer[];
  reduceMotion: boolean;
  getState(): SceneState;
  onHover(index: number | null): void;
  onSelect(index: number | null): void;
}

const BLUE = new Color('#63C7FF');
const CORAL = new Color('#FF7A6B');
const LAYER_GAP = 1.1;
const BLOCKS: [number, number][][] = [
  [
    [-1.5, -1.5],
    [1.5, 0],
    [0, 1.5],
  ],
  [
    [-1.5, 0],
    [0, 0],
    [1.5, 0],
  ],
  [
    [-1.5, 1.5],
    [0, -1.5],
    [1.5, 1.5],
    [1.5, -1.5],
  ],
  [
    [0, 0],
    [-1.5, -1.5],
  ],
];

export function hasWebGL(): boolean {
  try {
    const probe = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (probe.getContext('webgl2') || probe.getContext('webgl')));
  } catch {
    return false;
  }
}

export function createStackScene(opts: Options): StackScene {
  const { canvas, hero, layers: layerData, reduceMotion } = opts;
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new Scene();
  const camera = new PerspectiveCamera(28, 1, 0.1, 200);
  camera.position.set(15, 12.5, 15);
  camera.lookAt(0, 0.4, 0);

  const root = new Group();
  scene.add(root);
  const disposables: { dispose(): void }[] = [];
  const track = <T extends { dispose(): void }>(item: T) => {
    disposables.push(item);
    return item;
  };

  const slabGeo = track(new BoxGeometry(5.6, 0.14, 5.6));
  const slabEdges = track(new EdgesGeometry(slabGeo));
  const blockGeo = track(new BoxGeometry(0.85, 0.55, 0.85));
  const blockEdges = track(new EdgesGeometry(blockGeo));
  const topGeo = track(new PlaneGeometry(0.85, 0.85));
  const pickables: Mesh[] = [];

  const stack = layerData.map((layer, i) => {
    const accent = layer.accent === 'coral' ? CORAL : BLUE;
    const base = (i - (layerData.length - 1) / 2) * LAYER_GAP;
    const g = new Group();
    const mats = {
      slab: track(
        new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.06, depthWrite: false }),
      ),
      edge: track(new LineBasicMaterial({ color: accent, transparent: true, opacity: 0.85 })),
      blockEdge: track(new LineBasicMaterial({ color: accent, transparent: true, opacity: 1 })),
      top: track(
        new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.35, side: DoubleSide }),
      ),
      body: track(new MeshBasicMaterial({ color: '#0E1726', transparent: true, opacity: 1 })),
      grid: null as unknown as Material,
    };
    const slab = new Mesh(slabGeo, mats.slab);
    slab.userData.layer = i;
    pickables.push(slab);
    g.add(slab, new LineSegments(slabEdges, mats.edge));
    const grid = new GridHelper(5.6, 8, accent, accent);
    const gridMat = grid.material as Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.14;
    mats.grid = track(gridMat);
    track(grid.geometry);
    grid.position.y = 0.075;
    g.add(grid);

    const blocks = (BLOCKS[i] ?? []).map(([bx, bz], n) => {
      const bg = new Group();
      const body = new Mesh(blockGeo, mats.body);
      body.userData.layer = i;
      pickables.push(body);
      const top = new Mesh(topGeo, mats.top);
      top.rotation.x = -Math.PI / 2;
      top.position.y = 0.276;
      bg.add(body, new LineSegments(blockEdges, mats.blockEdge), top);
      bg.position.set(bx, 0.35, bz);
      g.add(bg);
      return { g: bg, bx, bz, n };
    });

    root.add(g);
    return { g, base, blocks, mats, phase: i * 0.7, em: 1, lift: 0, push: 0 };
  });

  // Links between blocks on neighbouring layers, with pulses travelling up.
  const links: { a: Group; b: Group; va: Vector3; vb: Vector3 }[] = [];
  for (let i = 0; i < stack.length - 1; i++) {
    const up = stack[i + 1].blocks;
    stack[i].blocks.forEach((from, k) =>
      links.push({ a: from.g, b: up[k % up.length].g, va: new Vector3(), vb: new Vector3() }),
    );
  }
  const linkPos = new Float32Array(links.length * 6);
  const linkGeo = track(new BufferGeometry());
  linkGeo.setAttribute('position', new BufferAttribute(linkPos, 3));
  const linkMat = track(new LineBasicMaterial({ color: BLUE, transparent: true, opacity: 0.35 }));
  root.add(new LineSegments(linkGeo, linkMat));
  const pulseGeo = track(new BoxGeometry(0.1, 0.22, 0.1));
  const pulseMat = track(new MeshBasicMaterial({ color: CORAL }));
  const pulses = links.map((l) => {
    const m = new Mesh(pulseGeo, pulseMat);
    root.add(m);
    return { m, l, t: Math.random(), speed: 0.12 + Math.random() * 0.1 };
  });

  const dust: number[] = [];
  for (let d = 0; d < 420; d++)
    dust.push((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 24, (Math.random() - 0.5) * 40);
  const dustGeo = track(new BufferGeometry());
  dustGeo.setAttribute('position', new Float32BufferAttribute(dust, 3));
  scene.add(
    new Points(
      dustGeo,
      track(new PointsMaterial({ color: '#7F8BA0', size: 0.05, transparent: true, opacity: 0.5 })),
    ),
  );

  const resize = () => {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    if (w > 960) camera.setViewOffset(w, h, -w * 0.22, h * 0.08, w, h);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  };
  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  // Hover highlights a layer, click selects it, drag rotates the stack.
  const ray = new Raycaster();
  const ndc = new Vector2();
  const mouse = { x: 0, y: 0 };
  let drag: { x: number; lastX: number; rot0: number; moved: boolean } | null = null;
  let userRot = 0;
  let spin = 0;
  let autoRot = 0;
  const pick = (ev: PointerEvent): number | null => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pickables, false)[0];
    return hit ? (hit.object.userData.layer as number) : null;
  };
  const onMove = (ev: PointerEvent) => {
    mouse.x = ev.clientX / window.innerWidth - 0.5;
    mouse.y = ev.clientY / window.innerHeight - 0.5;
    if (drag) {
      if (Math.abs(ev.clientX - drag.x) > 4) drag.moved = true;
      spin = (ev.clientX - drag.lastX) * 0.008;
      drag.lastX = ev.clientX;
      userRot = drag.rot0 + (ev.clientX - drag.x) * 0.008;
      return;
    }
    const over = ev.target === canvas ? pick(ev) : null;
    canvas.style.cursor = over === null ? 'grab' : 'pointer';
    if (over !== opts.getState().hover) opts.onHover(over);
  };
  const onDown = (ev: PointerEvent) => {
    if (ev.button !== 0) return;
    drag = { x: ev.clientX, lastX: ev.clientX, rot0: userRot, moved: false };
    spin = 0;
    canvas.style.cursor = 'grabbing';
  };
  const onUp = (ev: PointerEvent) => {
    if (!drag) return;
    const wasClick = !drag.moved;
    drag = null;
    canvas.style.cursor = 'grab';
    if (wasClick && ev.target === canvas) {
      const hit = pick(ev);
      const current = opts.getState().selected;
      opts.onSelect(hit === null || hit === current ? null : hit);
    }
  };
  window.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerdown', onDown);
  window.addEventListener('pointerup', onUp);

  const va = new Vector3();
  const vb = new Vector3();
  const start = performance.now();
  let last = start;
  const ease = (x: number) => 1 - Math.pow(1 - x, 4);
  let raf = 0;
  let visible = true;

  const frame = (elapsed: number, dt: number) => {
    const { hover, selected, paused } = opts.getState();
    const still = reduceMotion || paused;
    const focus = selected ?? hover;
    const heroHeight = hero.offsetHeight || 800;
    const scrolled = Math.min(Math.max(window.scrollY / (heroHeight * 0.8), 0), 1);
    const s = reduceMotion ? 0 : scrolled * scrolled * (3 - 2 * scrolled);
    const k = Math.min(dt * 8, 1);

    stack.forEach((L, i) => {
      const intro = reduceMotion ? 1 : ease(Math.min(Math.max((elapsed - i * 0.18) / 1.4, 0), 1));
      const breathe = still ? 0 : Math.sin(elapsed * 0.6 + L.phase) * 0.04;
      const lit = focus === i ? 1 : 0;
      L.em += ((focus === null || focus === i ? 1 : 0.22) - L.em) * k;
      L.lift += ((i === hover || i === selected ? 0.35 : 0) - L.lift) * k;
      L.push += ((selected === null || i === selected ? 0 : Math.sign(i - selected) * 1.1) - L.push) * k;
      L.g.position.y =
        L.base * (1 + breathe) + (i - 1.5) * s * 3.4 + L.lift + L.push + (1 - intro) * (8 + i * 2);
      L.g.rotation.y = (1 - intro) * 0.8 + s * (i - 1.5) * 0.5;
      L.g.rotation.z = s * (i - 1.5) * 0.08;
      L.mats.slab.opacity = (0.06 + lit * 0.12) * L.em;
      L.mats.edge.opacity = 0.85 * L.em;
      L.mats.grid.opacity = (0.14 + lit * 0.16) * L.em;
      L.mats.blockEdge.opacity = L.em;
      L.mats.top.opacity = (0.35 + lit * 0.4) * L.em;
      L.mats.body.opacity = 0.4 + 0.6 * L.em;
      L.blocks.forEach((b) => {
        b.g.position.x = b.bx * (1 + s * 0.7);
        b.g.position.z = b.bz * (1 + s * 0.7);
        b.g.rotation.y = s * (b.n % 2 ? 0.6 : -0.6);
        const bob = still ? 0 : Math.max(0, Math.sin(elapsed * 1.4 + b.n + i)) * 0.12;
        b.g.position.y = 0.35 + bob + lit * 0.15 + s * (0.6 + b.n * 0.4);
      });
    });

    if (!drag) {
      userRot += spin;
      spin *= 0.94;
      if (focus === null && !still) autoRot += dt * 0.06;
    }
    root.rotation.y += (autoRot + userRot + mouse.x * 0.3 - root.rotation.y) * 0.08;
    root.rotation.x += (mouse.y * 0.1 - root.rotation.x) * 0.05;
    root.position.y = -s * 2.4;
    root.scale.setScalar(1 - s * 0.18);
    root.updateMatrixWorld(true);

    linkMat.opacity = focus === null ? 0.35 : 0.15;
    links.forEach((l, n) => {
      l.a.getWorldPosition(va);
      l.b.getWorldPosition(vb);
      root.worldToLocal(va);
      root.worldToLocal(vb);
      va.y += 0.28;
      vb.y -= 0.28;
      linkPos.set([va.x, va.y, va.z, vb.x, vb.y, vb.z], n * 6);
      l.va.copy(va);
      l.vb.copy(vb);
    });
    linkGeo.attributes.position.needsUpdate = true;
    pulses.forEach((p) => {
      if (!still) {
        p.t += dt * p.speed * (1 + s * 0.8);
        if (p.t > 1) p.t -= 1;
      }
      p.m.position.lerpVectors(p.l.va, p.l.vb, p.t);
    });

    renderer.render(scene, camera);
  };

  const tick = () => {
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    frame((now - start) / 1000, dt);
    if (visible) raf = requestAnimationFrame(tick);
  };
  const visibility = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !visible) {
      visible = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    } else if (!entry.isIntersecting) {
      visible = false;
      cancelAnimationFrame(raf);
    }
  });
  visibility.observe(hero);
  tick();

  return {
    dispose() {
      cancelAnimationFrame(raf);
      visibility.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    },
  };
}
