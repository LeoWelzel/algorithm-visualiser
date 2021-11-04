import React, { useState } from 'react'
import FadeIn from 'react-fade-in';
import { Route, Switch } from 'react-router-dom';
import { HasSize } from '../common/hasSize';
import { DefaultPage } from '../DefaultPage';
import { Routes } from '../routes';
import { shuffle } from '../util/shuffle';
import { SortingAlgorithmEnum } from './algorithm';
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
            array={ array }
            selectedIndex={ SortingAlgorithmEnum.Quicksort }
            { ...props }
          />
        </Route>
        <Route path={ SortingRoutes.mergesort }>
          <SortAlgoPageTemplate
            array={ array }
            selectedIndex={ SortingAlgorithmEnum.Mergesort }
            { ...props }
          />
        </Route>
        <Route path={ SortingRoutes.heapsort }>
          <SortAlgoPageTemplate
            array={ array }
            selectedIndex={ SortingAlgorithmEnum.Heapsort }
            { ...props }
          />
        </Route>
        <Route path={'*'}>
          <DefaultPage/>
        </Route>
      </Switch>
    </FadeIn>
  )
}
