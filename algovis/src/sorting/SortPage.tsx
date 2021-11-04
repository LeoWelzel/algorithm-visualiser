import React, { useState } from 'react'
import FadeIn from 'react-fade-in';
import { Route, Switch } from 'react-router-dom';
import { HasSize } from '../common/hasSize';
import { Card } from '../components/Card';
import { Grid } from '../components/Grid';
import { DefaultPage } from '../DefaultPage';
import { Routes } from '../routes';
import { shuffle } from '../util/shuffle';
import { SortingAlgorithmEnum } from './algorithm';
import { HeapsortPage } from './HeapsortPage';
import { SortingRoutes } from './routes';
import { SortAlgoPageTemplate } from './SortAlgoPageTemplate';
import { SortHomePage } from './SortHomePage';

export const SortPage = (props: HasSize) => {
  const [arrayLength, setArrayLength] = useState(64);

  const randomArray = (length: number) => {
    const arr = [];

    for (let i = 1; i <= length; i++)
      arr.push(i);

    shuffle(arr);

    return arr;
  }

  const [array, setArray] = useState(randomArray(arrayLength));

  return (
    <FadeIn>
      <Switch>
        <Route exact path={ Routes.sorting }>
          <SortHomePage/>
        </Route>
        <Route path={ SortingRoutes.quicksort }>
          <SortAlgoPageTemplate
            selectedIndex={ SortingAlgorithmEnum.Quicksort }
          />
        </Route>
        <Route path={ SortingRoutes.mergesort }>
          <SortAlgoPageTemplate
            selectedIndex={ SortingAlgorithmEnum.Mergesort }
          />
        </Route>
        <Route path={ SortingRoutes.heapsort }>
          <SortAlgoPageTemplate
            selectedIndex={ SortingAlgorithmEnum.Heapsort }
          />
        </Route>
        <Route path={'*'}>
          <DefaultPage/>
        </Route>
      </Switch>
    </FadeIn>
  )
}
