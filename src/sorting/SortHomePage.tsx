import React from 'react'
import FadeIn from 'react-fade-in'
import { Body, Title } from '../common/Text'
import { Grid } from '../components/Grid'
import { PageTextPadding } from '../PageTextPadding'
import { DemoCard } from './DemoCard'
import { SortingAlgorithmEnum } from './algorithmEnum'
import { randomArray } from '../util/randomArray'

import '../styles/Text.scss'

export const SortHomePage = () => {
  const cardArrayLength = 16;

  return (
    <FadeIn>
      <PageTextPadding className='text-align-center' bottom={ false }>
        <Title >
          Sorting algorithms
        </Title>
      </PageTextPadding>
      <PageTextPadding className='text-align-center' top={ false } bottom={ false }>
        <Body>
          To order a sequence, we use sorting algorithms.
          <br/><br/>
          Get started by chosing an algorithm.
        </Body>
      </PageTextPadding>
      <Grid>
        <DemoCard
          algorithm={ SortingAlgorithmEnum.Quicksort }
          array={ randomArray(cardArrayLength) }
        />
        <DemoCard
          algorithm={ SortingAlgorithmEnum.Mergesort }
          array={ randomArray(cardArrayLength) }
        />
        <DemoCard
          algorithm={ SortingAlgorithmEnum.Heapsort }
          array={ randomArray(cardArrayLength) }
        />
      </Grid>
    </FadeIn>
  )
}
