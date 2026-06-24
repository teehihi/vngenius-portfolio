import { useEffect, useRef } from "react";

export function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

export function MouseGlow() {
  useEffect(() => {
    const onMove = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div className="mouse-glow" aria-hidden="true" />;
}

export function ElectricBorder({ children, color = "#ec4899", className = "" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext("2d");
    let frame = 0;
    let raf = 0;

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pad = 28;
      const width = Math.max(1, rect.width + pad * 2);
      const height = Math.max(1, rect.height + pad * 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const left = pad;
      const top = pad;
      const right = width - pad;
      const bottom = height - pad;
      const radius = 22;
      const points = 140;
      const jitter = 4;

      ctx.beginPath();
      for (let i = 0; i <= points; i += 1) {
        const t = i / points;
        const perimeter = 2 * (right - left + bottom - top);
        const distance = t * perimeter;
        let x = left;
        let y = top;

        if (distance < right - left) {
          x = left + distance;
          y = top;
        } else if (distance < right - left + bottom - top) {
          x = right;
          y = top + (distance - (right - left));
        } else if (distance < 2 * (right - left) + bottom - top) {
          x = right - (distance - (right - left + bottom - top));
          y = bottom;
        } else {
          x = left;
          y = bottom - (distance - (2 * (right - left) + bottom - top));
        }

        const wave = Math.sin(t * Math.PI * 16 + frame * 0.035) * jitter;
        const pulse = Math.cos(t * Math.PI * 9 - frame * 0.025) * (jitter * 0.45);
        const dx = x < left + radius || x > right - radius ? pulse : wave;
        const dy = y < top + radius || y > bottom - radius ? wave : pulse;

        if (i === 0) ctx.moveTo(x + dx, y + dy);
        else ctx.lineTo(x + dx, y + dy);
      }

      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 14;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [color]);

  return (
    <div ref={containerRef} className={`electric-wrap ${className}`}>
      <canvas ref={canvasRef} className="electric-canvas" aria-hidden="true" />
      <div className="electric-content">{children}</div>
    </div>
  );
}

export function ShimmerText({ children, className = "" }) {
  return <span className={`shimmer-text ${className}`}>{children}</span>;
}

export function CircularStamp({ text = "BUILD PLAY INSPIRE" }) {
  const chars = `${text} • `.split("");
  return (
    <div className="circular-stamp" aria-hidden="true">
      {chars.map((char, index) => (
        <span key={`${char}-${index}`} style={{ transform: `rotate(${(360 / chars.length) * index}deg)` }}>
          {char}
        </span>
      ))}
    </div>
  );
}
