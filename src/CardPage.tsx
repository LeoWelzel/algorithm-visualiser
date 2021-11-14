import React from 'react'
import FadeIn from 'react-fade-in';
import { Body, Title } from './common/Text';
import { Grid } from './components/Grid';
import { PageTextPadding } from './PageTextPadding';
import { SortingAlgorithmEnum } from './sorting/algorithmEnum';
import { DemoCard } from './sorting/DemoCard';
import { randomArray } from './util/randomArray';

interface CardPageProps {
  arrayLength?: number;
  title: string;
  body: string;
}

export const CardPage = (props: CardPageProps) => {
  const arrayLength = props.arrayLength ?? 16;

  return (
    <FadeIn>
      <PageTextPadding className='text-align-center' bottom={ false }>
        <Title>
          { props.title }
        </Title>
      </PageTextPadding>
      <PageTextPadding className='text-align-center' top={ false } bottom={ false }>
        <Body
          style={{ whiteSpace: 'pre-line' }}
        >
          { props.body }
        </Body>
      </PageTextPadding>
      <Grid>
        <DemoCard
          algorithm={ SortingAlgorithmEnum.Quicksort }
          array={ randomArray(arrayLength) }
        />
        <DemoCard
          algorithm={ SortingAlgorithmEnum.Mergesort }
          array={ randomArray(arrayLength) }
        />
        <DemoCard
          algorithm={ SortingAlgorithmEnum.Heapsort }
          array={ randomArray(arrayLength) }
        />
      </Grid>
    </FadeIn>
  )
}
