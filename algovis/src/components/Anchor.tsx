import React from 'react'
import { useHistory } from 'react-router-dom'

import './Anchor.scss'

interface AnchorProps {
  route: string;
  color?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  hoverColour?: string;
}

export const Anchor = (props: AnchorProps) => {
  const history = useHistory();

  const hoverColour = props.hoverColour ?? '#c133fe';
  const style = { ...props.style, '&:hover': { color: hoverColour } }
  const className = props.color === false ?
    props.className :
    'anchor-text ' + props.className ?? '';

  return (
    <div
      style={ style }
      className={ className }
      onClick={ () => history.push(props.route)}
    >
      { props.children }
    </div>
  )
}
