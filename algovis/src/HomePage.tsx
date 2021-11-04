import React from 'react'
import FadeIn from 'react-fade-in';
import { Subtitle, Title } from './common/Text';
import { Card } from './components/Card';
import { Grid } from './components/Grid';
import { PageTextPadding } from './PageTextPadding';
import { DemoCard } from './sorting/DemoCard';
import { SortingAlgorithmEnum } from './sorting/algorithmEnum';
import { randomInt } from './util/randomInt';
import { randomArray } from './util/randomArray';

import './styles/Text.scss'

export const HomePage = () => {
  // TODO: fix sorting cards by storing their array props in hooks
  return (
    <PageTextPadding>
      <FadeIn>
        <Title className='text-align-center'>
          Building the future of algorithm visualisation
        </Title>
        <Subtitle className='text-align-center'>
          Use our visualisations, powered by state-of-the-art AI and revolutionary Big Data pipelines
        </Subtitle>
        <div style={{ height: '2rem' }}/>
        <Grid>
          <DemoCard
            algorithm={ randomInt(0, SortingAlgorithmEnum.NumAlgorithms - 1) }
            array={ randomArray(16) }
            linkToSortingHome={ true }
            title='Sorting algorithms'
          />
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
        </Grid>
      </FadeIn>
    </PageTextPadding>
  )
}
