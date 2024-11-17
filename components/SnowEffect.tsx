import React, { useEffect, useRef } from "react";

const SnowEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const snowflakes: { x: number; y: number; speed: number }[] = [];

    // Create snowflakes
    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 3 + 1,
      });
    }

    // Update snowflakes on each animation frame
    function update() {
      if (ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clear previous frame

        snowflakes.forEach((flake) => {
          flake.y += flake.speed;
          if (flake.y > window.innerHeight) {
            flake.y = -10;
            flake.x = Math.random() * window.innerWidth;
          }

          ctx.beginPath();
          ctx.arc(flake.x, flake.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
        });
      }

      requestAnimationFrame(update);
    }

    update(); // Start the animation

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default SnowEffect;
