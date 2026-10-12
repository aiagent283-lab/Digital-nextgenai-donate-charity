import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    let frame = 0;
    let tick = 0;
    const pointer = { x: -1000, y: -1000 };
    const nodes = Array.from({ length: 42 }, (_, i) => ({ x: ((i * 37 + 11) % 101) / 101, y: ((i * 61 + 19) % 103) / 103 }));
    const resize = () => { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; };
    const move = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top; };
    const colors = getComputedStyle(canvas);
    const lineColor = colors.getPropertyValue('--network-line').trim();
    const dotColor = colors.getPropertyValue('--cyan').trim();
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick += reduced ? 0 : 0.003;
      const positions = nodes.map((node, i) => ({ x: node.x * canvas.width + Math.sin(tick + i) * 14, y: node.y * canvas.height + Math.cos(tick + i * 2) * 16 }));
      positions.forEach((node, i) => {
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = 0.28;
        ctx.beginPath(); ctx.arc(node.x, node.y, 1.4, 0, Math.PI * 2); ctx.fill();
        positions.slice(i + 1).forEach(other => {
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance > 155) return;
          ctx.strokeStyle = lineColor; ctx.globalAlpha = (1 - distance / 155) * 0.5;
          ctx.beginPath(); ctx.moveTo(node.x, node.y); ctx.lineTo(other.x, other.y); ctx.stroke();
        });
        if (!reduced && Math.hypot(node.x - pointer.x, node.y - pointer.y) < 200) {
          ctx.strokeStyle = dotColor; ctx.globalAlpha = 0.25;
          ctx.beginPath(); ctx.moveTo(node.x, node.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
        }
      });
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener('resize', resize); window.addEventListener('pointermove', move);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move); };
  }, [reduced]);
  return <canvas ref={canvasRef} className="neural-field" aria-hidden="true" />;
}