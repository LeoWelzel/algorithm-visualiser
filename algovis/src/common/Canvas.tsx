import { DrawFunction, useCanvas } from './useCanvas';

interface CanvasProps {
  width: number;
  height: number;
  drawFunction: DrawFunction;
  background: string;
}

export const Canvas = (props: CanvasProps) => {
  const canvasRef = useCanvas(props.drawFunction, props.background);

  return (
    <canvas
      ref={ canvasRef }
      width={ props.width }
      height={ props.height }
    >
    </canvas>
  )
}
