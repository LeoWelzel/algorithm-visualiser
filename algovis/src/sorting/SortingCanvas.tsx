import React from 'react'
import { Canvas } from '../common/Canvas'

interface SortingCanvasProps {
  width: number;
  height: number;
}

export const SortingCanvas = (props: SortingCanvasProps) => {
  return (
    <Canvas
      width={ props.width }
      height={ props.height }
      background={ '#c4c4c4' }
      drawFunction={ (context, frameCount) => {
        context.fillStyle = '#ff00ff';
        context.fillRect(
          100, 100, 200 + 100 * Math.sin(frameCount / 6.28), 200 + 100 * Math.cos(frameCount / 6.28)
        )
      } }
    />
  )
}
