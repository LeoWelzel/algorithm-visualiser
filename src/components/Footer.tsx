import React from 'react'
import { Column } from '../common/Column'
import { Row } from '../common/Row'
import { Spacer } from '../common/Spacer'
import { Anchor } from './Anchor'
import { Routes } from '../routes'

import '../styles/Unselectable.scss'
import '../styles/Responsive.scss'
import '../styles/Text.scss'
import './Bar.scss'

export const Footer = () => {
  const mainFlex = 10;

  const HomeRoute = () =>
    <Anchor route={ Routes.home }>
      Home
    </Anchor>

  const AboutRoute = () =>
    <Anchor route={ Routes.about }>
      About
    </Anchor>

  const Copyright = () =>
    <div>Copyright © 2021</div>

  // TODO: make responsive
  return (
    <div className='unselectable'>
      <div className='responsive-hide-children-small'>
        <Column className='bar-container-fixed-height'>
          <Spacer/>
          <Row>
            <Spacer flex={ mainFlex }/>
            <HomeRoute/>
            <Spacer/>
            <AboutRoute/>
            <Spacer/>
            <Copyright/>
            <Spacer flex={ mainFlex }/>
          </Row>
          <Spacer/>
        </Column>
      </div>
      <div className='responsive-hide-children-large'>
        <Column className='bar-container'>
          <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <Spacer/>
            <HomeRoute/>
            <Spacer/>
          </Row>
          <Row>
            <Spacer/>
            <AboutRoute/>
            <Spacer/>
          </Row>
          <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <Spacer/>
            <Copyright/>
            <Spacer/>
          </Row>
        </Column>
      </div>
    </div>
  )
}
