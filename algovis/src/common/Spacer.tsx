import React from 'react'

interface SpacerProps {
  flex?: number;
  children?: React.ReactNode;
}

export const Spacer = (props: SpacerProps) =>
  <div style={{ flex: props.flex ?? 1 }}>
    { props.children }
  </div>
