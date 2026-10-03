import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const busy = new WeakSet<Element>();

// A coral pulse travels chip to chip through a flow, lighting each chip as it passes.
function pulseFlow(box: HTMLElement) {
  if (busy.has(box)) return;
  const pulse = box.querySelector<HTMLElement>('[data-pulse]');
  const chips = Array.from(box.querySelectorAll<HTMLElement>('[data-chip]'));
  if (!pulse || chips.length === 0) return;
  busy.add(box);

  const center = (el: HTMLElement) => ({
    x: el.offsetLeft + el.offsetWidth / 2,
    y: el.offsetTop + el.offsetHeight / 2,
  });
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(chips, { clearProps: 'borderColor,color' });
      busy.delete(box);
    },
  });
  const start = center(chips[0]);
  tl.set(pulse, { x: start.x, y: start.y, xPercent: -50, yPercent: -50, opacity: 0, scale: 0.4 });
  tl.to(pulse, { opacity: 1, scale: 1, duration: 0.4 });

  let t = 0.2;
  chips.forEach((chip, i) => {
    const style = getComputedStyle(chip);
    const p = center(chip);
    if (i > 0) {
      tl.to(pulse, { x: p.x, y: p.y, duration: 0.75, ease: 'sine.inOut' }, t);
      t += 0.75;
    }
    tl.to(chip, { borderColor: '#ff7a6b', color: '#ffd2cc', duration: 0.3 }, t - 0.1);
    tl.to(chip, { borderColor: style.borderTopColor, color: style.color, duration: 0.9 }, t + 0.5);
  });
  tl.to(pulse, { opacity: 0, scale: 0.4, duration: 0.6 }, t + 0.3);
}

function setUp() {
  root.classList.add('motion-ready');

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero]');
    if (heroItems.length) {
      gsap.fromTo(
        heroItems,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.15 },
      );
    }

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      tl.fromTo(el, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });

      el.querySelectorAll<HTMLElement>('[data-split]').forEach((heading) => {
        const split = SplitText.create(heading, { type: 'words', aria: 'auto' });
        tl.from(
          split.words,
          { yPercent: 70, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out' },
          0.1,
        );
      });

      const chips = el.querySelectorAll<HTMLElement>('[data-chip], [data-arrow]');
      if (chips.length) {
        tl.from(chips, { opacity: 0, x: -6, duration: 0.7, stagger: 0.12, ease: 'power2.out' }, 0.3);
      }

      const diagram = el.querySelector('[data-diagram]');
      if (diagram) {
        tl.from(
          diagram.querySelectorAll('[data-node]'),
          { opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          0.25,
        );
        tl.from(diagram.querySelectorAll('[data-edge]'), { opacity: 0, duration: 0.7, stagger: 0.08 }, 0.8);
      }

      const box = el.querySelector<HTMLElement>('[data-flowbox]');
      if (box) {
        tl.call(() => pulseFlow(box), [], 1 + chips.length * 0.12);
        box.closest<HTMLElement>('.card')?.addEventListener('pointerenter', () => pulseFlow(box));
      }
    });

    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const amount = Number(el.dataset.parallax) || 20;
      gsap.fromTo(
        el,
        { y: -amount },
        {
          y: amount,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
    });
  });

  // With reduced motion, everything is shown as-is.
  mm.add('(prefers-reduced-motion: reduce)', () => {
    root.classList.add('motion-off');
  });
}

setUp();
