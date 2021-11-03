import React from 'react'
import { BasicProps, HasChildren } from './basicProps';

export interface FlexContainerProps extends BasicProps, HasChildren {}

interface FlexContainerDirection {
  flexDirection: 'row' | 'column';
}

export const FlexContainer = (props: FlexContainerProps & FlexContainerDirection) => {
  const baseStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: props.flexDirection
  };

  const style = props.style === undefined ? baseStyle: { ...baseStyle, ...props.style };

  return (
    <div className={ props.className } style={ style }>
      { props.children }
    </div>
  )
}
