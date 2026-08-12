"use client";

import { useEffect, useRef } from "react";
import { portraitPath } from "@content/profile";

type Props = {
  alt: string;
  className?: string;
  objectPosition?: string;
};

export function DenoisePortrait({
  alt,
  className = "",
  objectPosition = "50% 28%",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mouse = useRef<{ x: number; y: number; inside: boolean }>({
    x: 0.5,
    y: 0.5,
    inside: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    const started = performance.now();
    const duration = 1800;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const paint = (global: number, local: number) => {
      const w = canvas.width;
      const h = canvas.height;
      if (w < 2 || h < 2) return;
      const image = ctx.createImageData(w, h);
      const data = image.data;
      const mx = mouse.current.x * w;
      const my = mouse.current.y * h;
      const radius = Math.min(w, h) * 0.28;
      const radius2 = radius * radius;

      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const dx = x - mx;
          const dy = y - my;
          const bump =
            mouse.current.inside && local > 0
              ? Math.max(0, 1 - (dx * dx + dy * dy) / radius2) * local
              : 0;
          const a = Math.min(1, global + bump);
          const v = Math.random() * 255;
          const alpha = a * 220;
          for (let oy = 0; oy < 2; oy++) {
            for (let ox = 0; ox < 2; ox++) {
              const i = ((y + oy) * w + (x + ox)) * 4;
              data[i] = v;
              data[i + 1] = v;
              data[i + 2] = v;
              data[i + 3] = alpha;
            }
          }
        }
      }
      ctx.putImageData(image, 0, 0);
    };

    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      const global = reduce ? 0 : 1 - ease;
      const local = reduce ? 0 : 0.45;
      paint(global, local);
      if (!reduce && (t < 1 || mouse.current.inside)) {
        raf = requestAnimationFrame(tick);
      } else if (!reduce) {
        paint(0, 0);
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
      mouse.current.inside = true;
      if (!reduce) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      mouse.current.inside = false;
    };

    resize();
    if (reduce) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      raf = requestAnimationFrame(tick);
    }

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden bg-[var(--surface)] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={portraitPath}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
