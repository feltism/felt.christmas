import { useEffect, useRef } from "react";

export default function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const snowflakes: { x: number; y: number; radius: number; speed: number }[] = [];
    const numFlakes = 100;
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;  // Ensure canvas width matches window width
    canvas.height = innerHeight; // Ensure canvas height matches window height

    // Initialize snowflakes with random positions and speeds
    for (let i = 0; i < numFlakes; i++) {
      snowflakes.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
      });
    }

    function update() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);  // Clear previous frame

      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > innerHeight) flake.y = 0; // Reset snowflake to top if it falls off the bottom
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      requestAnimationFrame(update);  // Keep animating the snowflakes
    }

    update();  // Start the animation loop

  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>;
}
