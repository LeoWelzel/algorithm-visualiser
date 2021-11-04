import React from 'react'
import { SortingCanvas } from './SortingCanvas'

export const HeapsortPage = () => {
  const array = [];

  for (let i = 1; i < 100; i++) array.push(i)

  return (
    <SortingCanvas
      width={600}
      height={400}
      drawingWidthProportion={0.8}
      drawingHeightProportion={0.8}
      gapProportion={0.9}
      array={ array }
    />
  )
}
