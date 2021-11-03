import React from 'react'
import { useHistory } from 'react-router-dom'
import { BasicProps, HasChildren } from '../common/basicProps';

import './Anchor.scss'

interface AnchorProps extends BasicProps, HasChildren {
  route: string;
  color?: boolean;
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
