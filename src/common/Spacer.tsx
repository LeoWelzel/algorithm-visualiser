import React from 'react'
import { BasicProps, HasChildren } from './basicProps'

interface SpacerProps extends BasicProps, HasChildren {
  flex?: number;
}

export const Spacer = (props: SpacerProps) =>
  <div className={ props.className } style={{ flex: props.flex ?? 1, ...props.style }}>
    { props.children }
  </div>
