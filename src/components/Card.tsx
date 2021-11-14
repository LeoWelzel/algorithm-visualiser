import React from 'react'
import { BasicProps, HasChildren } from '../common/basicProps'
import { Column } from '../common/Column'
import { Row } from '../common/Row'
import { Spacer } from '../common/Spacer'

import './Card.scss'

interface CardProps extends BasicProps, HasChildren {  }

export const Card = (props: CardProps) => {
  const className = 'card-container ' + props.className ?? '';

  return (
    <div
      className={ className }
      style={ props.style }
    >
      <Column>
        <Spacer/>
        <Row>
          <Spacer/>  
          { props.children }
          <Spacer/>  
        </Row>
        <Spacer/>
      </Column>
    </div>
  )
}
