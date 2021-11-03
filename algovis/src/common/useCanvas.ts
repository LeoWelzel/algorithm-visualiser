import { useEffect, useRef } from "react";

export type DrawFunction = (context: CanvasRenderingContext2D, frameCount: number) => void;

export const useCanvas = (draw: DrawFunction, background: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    let frameCount = 0;
    let animationFrameId: number;
    
    const render = () => {
      frameCount++;

      if (context) {
        context.fillStyle = background;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        draw(context, frameCount);
      }

      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
  
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw, background]);
  
  return canvasRef;
}