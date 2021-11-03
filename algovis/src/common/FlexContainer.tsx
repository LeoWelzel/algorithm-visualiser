import React from 'react'

export interface FlexContainerProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

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
