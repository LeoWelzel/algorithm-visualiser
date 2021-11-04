import React from 'react'
import { HasSize } from '../common/hasSize';
import { SortingAlgorithmEnum } from './algorithm';
import { SortAlgoPageTemplate } from './SortAlgoPageTemplate';
// import { SortingCanvas } from './SortingCanvas'

export const HeapsortPage = (props: HasSize) => {
  const array = [];

  for (let i = 1; i < 100; i++) array.push(i)

  return (
    <div>
      <SortAlgoPageTemplate
        selectedIndex={ SortingAlgorithmEnum.Heapsort }
      />
    </div>
    // <SortingCanvas
    //   width={ props.width }
    //   height={ props.height }
    //   drawingWidthProportion={0.8}
    //   drawingHeightProportion={0.8}
    //   gapProportion={0.9}
    //   array={ array }
    // />
  )
}
