import React from 'react'
import { Canvas } from '../common/Canvas'
import { HasSize } from '../common/hasSize';

interface SortingCanvasProps extends HasSize {
  drawingWidthProportion: number;
  drawingHeightProportion: number;
  gapProportion: number;
  array: number[];

  fillColour?: string;
  background?: string;
}

export const SortingCanvas = (props: SortingCanvasProps) => {
  const fillColour = props.fillColour ?? '#29a0f0';

  const drawFunction = (context: CanvasRenderingContext2D, frameCount: number) => {
    context.fillStyle = fillColour;

    const drawingHeight = props.height * props.drawingHeightProportion;
    const startingY = (props.height - drawingHeight) / 2

    const drawingWidth = props.width * props.drawingWidthProportion;
    const stripWidth = drawingWidth / props.array.length;
    const barWidth = stripWidth * props.gapProportion;
    const startingX = (props.width - drawingWidth + stripWidth - barWidth) / 2;

    for (let x = 0; x < props.array.length; x++) {
      const xCoord = startingX + (x * stripWidth);

      context.fillRect(
        xCoord, startingY, barWidth, drawingHeight * props.array[x] / props.array.length
      )
    }
  }

  return (
    <Canvas
      width={ props.width }
      height={ props.height }
      background={ props.background ?? '#fff' }
      drawFunction={ drawFunction }
    />
  )
}
