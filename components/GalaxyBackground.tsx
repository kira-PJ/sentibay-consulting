"use client";
import { useEffect, useRef } from "react";

interface Star { x: number; y: number; size: number; brightness: number; twinkleSpeed: number; twinklePhase: number; color: string; }
interface NebulaCloud { x: number; y: number; radius: number; opacity: number; rotation: number; rotationSpeed: number; pulsePhase: number; color: string; }
interface CosmicDust { x: number; y: number; vx: number; vy: number; size: number; opacity: number; life: number; maxLife: number; }
interface ShootingStar { x: number; y: number; vx: number; vy: number; length: number; opacity: number; life: number; }

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: Star[] = [];
    const nebulaClouds: NebulaCloud[] = [];
    const cosmicDust: CosmicDust[] = [];
    const shootingStars: ShootingStar[] = [];

    const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < 300; i++) {
      stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 3 + 0.5, brightness: Math.random(), twinkleSpeed: Math.random() * 0.08 + 0.02, twinklePhase: Math.random() * Math.PI * 2, color: ["#ffffff","#fff8dc","#e6e6fa","#ffd700","#87ceeb"][Math.floor(Math.random() * 5)] });
    }
    for (let i = 0; i < 12; i++) {
      nebulaClouds.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 150 + 50, opacity: Math.random() * 0.3 + 0.1, rotation: 0, rotationSpeed: (Math.random() - 0.5) * 0.02, pulsePhase: Math.random() * Math.PI * 2, color: ["#4b0082","#8b008b","#483d8b","#6a5acd","#9370db"][Math.floor(Math.random() * 5)] });
    }
    for (let i = 0; i < 150; i++) {
      cosmicDust.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, size: Math.random() * 2.5 + 0.5, opacity: Math.random() * 0.9 + 0.3, life: Math.random() * 1000, maxLife: 1000 });
    }

    const createShootingStar = () => {
      if (Math.random() < 0.008) shootingStars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height * 0.5, vx: Math.random() * 8 + 4, vy: Math.random() * 4 + 2, length: Math.random() * 80 + 50, opacity: 1, life: Math.random() * 150 + 80 });
    };

    const drawNebula = (cloud: NebulaCloud) => {
      ctx.save(); ctx.translate(cloud.x, cloud.y); ctx.rotate(cloud.rotation);
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, cloud.radius);
      const baseOpacity = cloud.opacity * (0.8 + 0.4 * Math.sin(cloud.pulsePhase));
      gradient.addColorStop(0, cloud.color + Math.floor(baseOpacity * 255).toString(16).padStart(2, "0"));
      gradient.addColorStop(0.3, cloud.color + Math.floor(baseOpacity * 0.6 * 255).toString(16).padStart(2, "0"));
      gradient.addColorStop(0.7, cloud.color + Math.floor(baseOpacity * 0.3 * 255).toString(16).padStart(2, "0"));
      gradient.addColorStop(1, cloud.color + "00");
      ctx.fillStyle = gradient; ctx.fillRect(-cloud.radius, -cloud.radius, cloud.radius * 2, cloud.radius * 2); ctx.restore();
    };

    const drawStar = (star: Star) => {
      const twinkle = 0.5 + 0.5 * Math.sin(star.twinklePhase);
      ctx.save(); ctx.globalAlpha = star.brightness * twinkle;
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
      gradient.addColorStop(0, star.color); gradient.addColorStop(0.2, star.color + "80"); gradient.addColorStop(1, star.color + "00");
      ctx.fillStyle = gradient; ctx.fillRect(star.x - star.size * 3, star.y - star.size * 3, star.size * 6, star.size * 6);
      ctx.fillStyle = star.color; ctx.fillRect(star.x - star.size / 2, star.y - star.size / 2, star.size, star.size);
      if (star.size > 2) { ctx.strokeStyle = star.color; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(star.x - star.size * 2, star.y); ctx.lineTo(star.x + star.size * 2, star.y); ctx.moveTo(star.x, star.y - star.size * 2); ctx.lineTo(star.x, star.y + star.size * 2); ctx.stroke(); }
      ctx.restore();
    };

    const drawShootingStar = (s: ShootingStar) => {
      ctx.save(); ctx.globalAlpha = s.opacity;
      const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * s.length / 5, s.y - s.vy * s.length / 5);
      gradient.addColorStop(0, "#ffffff"); gradient.addColorStop(0.3, "#ffd700"); gradient.addColorStop(1, "transparent");
      ctx.strokeStyle = gradient; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * s.length / 5, s.y - s.vy * s.length / 5); ctx.stroke(); ctx.restore();
    };

    let animId: number;
    const animate = () => {
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "#0d0221"); bgGradient.addColorStop(0.4, "#0a0f3d"); bgGradient.addColorStop(0.7, "#050d2e"); bgGradient.addColorStop(1, "#0d1b4b");
      ctx.fillStyle = bgGradient; ctx.fillRect(0, 0, canvas.width, canvas.height);

      nebulaClouds.forEach((cloud) => { cloud.rotation += cloud.rotationSpeed; cloud.pulsePhase += 0.08; cloud.x += Math.sin(cloud.pulsePhase * 0.5) * 0.3; cloud.y += Math.cos(cloud.pulsePhase * 0.3) * 0.2; drawNebula(cloud); });
      cosmicDust.forEach((dust) => { dust.x += dust.vx; dust.y += dust.vy; dust.life--; if (dust.x < 0) dust.x = canvas.width; if (dust.x > canvas.width) dust.x = 0; if (dust.y < 0) dust.y = canvas.height; if (dust.y > canvas.height) dust.y = 0; if (dust.life <= 0) { dust.life = dust.maxLife; dust.opacity = Math.random() * 0.8 + 0.2; } ctx.save(); ctx.globalAlpha = dust.opacity * (dust.life / dust.maxLife); ctx.fillStyle = "#87ceeb"; ctx.fillRect(dust.x, dust.y, dust.size, dust.size); ctx.restore(); });
      stars.forEach((star) => { star.twinklePhase += star.twinkleSpeed; drawStar(star); });
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) { const s = shootingStars[i]; s.x += s.vx; s.y += s.vy; s.life--; s.opacity = s.life / 100; if (s.life <= 0 || s.x > canvas.width || s.y > canvas.height) shootingStars.splice(i, 1); else drawShootingStar(s); }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => { window.removeEventListener("resize", resizeCanvas); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
