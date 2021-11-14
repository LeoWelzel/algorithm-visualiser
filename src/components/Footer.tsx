import React from 'react'
import { Column } from '../common/Column'
import { Row } from '../common/Row'
import { Spacer } from '../common/Spacer'
import { Anchor } from './Anchor'
import { Routes } from '../routes'

import '../styles/Unselectable.scss'
import '../styles/Text.scss'
import './Bar.scss'

export const Footer = () => {
  const mainFlex = 10;

  // TODO: make responsive
  return (
    <Column className='unselectable bar-container'>
      <Spacer/>
      <Row>
        <Spacer flex={ mainFlex }/>
        <Anchor route={ Routes.home }>
          Home
        </Anchor>
        <Spacer/>
        <Anchor route={ Routes.about }>
          About
        </Anchor>
        <Spacer/>
        <div>Copyright © 2021</div>
        <Spacer flex={ mainFlex }/>
      </Row>
      <Spacer/>
    </Column>
  )
}
