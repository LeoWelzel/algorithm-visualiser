import React from 'react'
import FadeIn from 'react-fade-in';
import { Row } from './common/Row';
import { Spacer } from './common/Spacer';
import { Subtitle, Title } from './common/Text';
import { Card } from './components/Card';
import { Grid } from './components/Grid';

import './styles/Text.scss'

export const HomePage = () => {
  return (
    <FadeIn>
      <Row>
        <Spacer/>
        <Title className='text-align-center'>
          Building the future of algorithm visualisation
        </Title>
        <Spacer/>
      </Row>
      <Row>
        <Spacer/>
        <Subtitle className='text-align-center'>
          Use our visualisations, powered by state-of-the-art AI and revolutionary Big Data pipelines
        </Subtitle>
        <Spacer/>
      </Row>
      <div style={{ height: '2rem' }}/>
      <Grid>
        <Card>
          Sorting algorithms
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam asperiores iste nisi repudiandae consequuntur cupiditate modi,
          quidem illo dignissimos adipisci optio nostrum aliquid nulla,
          excepturi eius sapiente distinctio quibusdam qui!
        </Card>
        <Card>
          Search algorithms
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam asperiores iste nisi repudiandae consequuntur cupiditate modi,
          quidem illo dignissimos adipisci optio nostrum aliquid nulla,
          excepturi eius sapiente distinctio quibusdam qui!
        </Card>
        <Card>
          Pathfinding algorithms
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam asperiores iste nisi repudiandae consequuntur cupiditate modi,
          quidem illo dignissimos adipisci optio nostrum aliquid nulla,
          excepturi eius sapiente distinctio quibusdam qui!
        </Card>
        <Card>
          TODO: think of something
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam asperiores iste nisi repudiandae consequuntur cupiditate modi,
          quidem illo dignissimos adipisci optio nostrum aliquid nulla,
          excepturi eius sapiente distinctio quibusdam qui!
        </Card>
      </Grid>
    </FadeIn>
  )
}
