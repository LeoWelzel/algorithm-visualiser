import React from 'react'
import { Column } from '../common/Column'
import { Row } from '../common/Row'
import { Spacer } from '../common/Spacer'
import { Anchor } from './Anchor'
import { Routes } from '../routes'

import '../styles/Unselectable.scss'
import '../styles/Hover.scss'
import '../styles/Text.scss'
import './Bar.scss'

export const Header = () => 
  <Column className='unselectable bar-container'>
    <Spacer/>
    <Row>
      <Spacer/>
      <Anchor className='text-large3 hover-cursor-pointer' color={ false } route={ Routes.home }>
        AlgoVis
      </Anchor>
      <Spacer/>
    </Row>
    <Spacer/>
  </Column>
