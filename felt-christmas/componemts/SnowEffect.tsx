// components/SnowEffect.tsx
import { useEffect, useRef } from "react";

export default function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const snowflakes: { x: number; y: number; speed: number; size: number }[] = [];
    const snowflakeImage = new Image();
    snowflakeImage.src = "https://path-to-your-snowflake-image.png"; // Replace with your external URL.

    const initSnowflakes = (count: number) => {
      for (let i = 0; i < count; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          size: Math.random() * 20 + 5,
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      snowflakes.length = 0;
      initSnowflakes(100); // Adjust the number of snowflakes here.
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((snowflake) => {
        ctx.drawImage(
          snowflakeImage,
          snowflake.x,
          snowflake.y,
          snowflake.size,
          snowflake.size
        );
        snowflake.y += snowflake.speed;

        // Reset snowflake position if it falls off the canvas
        if (snowflake.y > canvas.height) {
          snowflake.y = -snowflake.size;
          snowflake.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
}
