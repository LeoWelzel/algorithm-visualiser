import React from 'react'
import { Canvas } from '../common/Canvas'
import { HasSize, HasSizeRange } from '../common/hasSize';
import { SortingType } from './sort';

interface SortingCanvasProps extends HasSize, HasSizeRange {
  drawingWidthProportion: number;
  drawingHeightProportion: number;
  barProportion: number;
  array: SortingType[];

  fillColour?: string;
  background?: string;
}

export const SortingCanvas = (props: SortingCanvasProps) => {
  const computeDimension = (given: number, max: number | undefined, min: number | undefined) => {
    if (max !== undefined && given > max)
      return max;
    else if (min !== undefined && given < min)
      return min;
    else
      return given;
  }

  const width = computeDimension(props.width, props.maxWidth, props.minWidth);
  const height = computeDimension(props.height, props.maxHeight, props.minHeight);

  const fillColour = props.fillColour ?? '#29a0f0';

  const drawFunction = (context: CanvasRenderingContext2D, frameCount: number) => {
    context.fillStyle = fillColour;

    const drawingHeight = height * props.drawingHeightProportion;
    const startingY = (height - drawingHeight) / 2

    const drawingWidth = width * props.drawingWidthProportion;
    const stripWidth = drawingWidth / props.array.length;
    const barWidth = stripWidth * (props.barProportion);
    const startingX = (width - drawingWidth + stripWidth - barWidth) / 2;

    for (let x = 0; x < props.array.length; x++) {
      const xCoord = startingX + (x * stripWidth);

      context.fillRect(
        xCoord, startingY, barWidth, drawingHeight * props.array[x] / props.array.length
      )
    }
  }

  return (
    <Canvas
      width={ width }
      height={ height }
      background={ props.background ?? '#fff' }
      drawFunction={ drawFunction }
    />
  )
}
