import React from 'react'
import FadeIn from 'react-fade-in'
import { Body, Title } from '../common/Text'
import { Card } from '../components/Card'
import { Grid } from '../components/Grid'
import { PageTextPadding } from '../PageTextPadding'

export const SortHomePage = () => {
  return (
    <FadeIn>
      <PageTextPadding bottom={ false }>
        <Title>
          Sorting algorithms
        </Title>
      </PageTextPadding>
      <PageTextPadding top={ false } bottom={ false }>
        <Body>
          To order a sequence, we use sorting algorithms.
          <br/>
        </Body>
      </PageTextPadding>
      <PageTextPadding top={ false } bottom={ false }>
        <Body>
          Get started by chosing an algorithm.
        </Body>
      </PageTextPadding>
      <Grid>
        <Card>
          Quicksort - TODO: put sorting canvases in these cards
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam asperiores iste nisi repudiandae consequuntur cupiditate modi,
          quidem illo dignissimos adipisci optio nostrum aliquid nulla,
          excepturi eius sapiente distinctio quibusdam qui!
        </Card>
        <Card>
          Mergesort - TODO: put sorting canvases in these cards
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam asperiores iste nisi repudiandae consequuntur cupiditate modi,
          quidem illo dignissimos adipisci optio nostrum aliquid nulla,
          excepturi eius sapiente distinctio quibusdam qui!
        </Card>
        <Card>
          Heapsort - TODO: put sorting canvases in these cards
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
