import React from 'react'
import { BasicProps, HasChildren } from '../common/basicProps'

import './Grid.scss'

interface GridProps extends BasicProps, HasChildren {}

export const Grid = (props: GridProps) => {
  return (
    <div
      className={ 'grid ' + props.className ?? '' }
      style={ props.style }
    >
      { props.children }
    </div>
  )
}
