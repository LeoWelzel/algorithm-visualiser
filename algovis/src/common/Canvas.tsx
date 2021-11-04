import { HasSize } from './hasSize';
import { DrawFunction, useCanvas } from './useCanvas';

interface CanvasProps extends HasSize {
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
