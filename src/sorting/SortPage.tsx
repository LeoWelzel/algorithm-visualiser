import React, { useState } from 'react'
import FadeIn from 'react-fade-in';
import { Route, Switch } from 'react-router-dom';
import { HasSize } from '../common/hasSize';
import { DefaultPage } from '../DefaultPage';
import { Routes } from '../routes';
import { randomArray } from '../util/randomArray';
import { SortingAlgorithmEnum } from './algorithmEnum';
import { SortingRoutes } from './routes';
import { SortAlgoPageTemplate } from './SortAlgoPageTemplate';
import { SortHomePage } from './SortHomePage';

export const SortPage = (props: HasSize) => {
  const arrayLength = 64;

  const [array, setArray] = useState(randomArray(arrayLength));
  const [running, setRunning] = useState(false);

  return (
    <FadeIn>
      <Switch>
        <Route exact path={ Routes.home }>
          <SortHomePage/>
        </Route>
        <Route exact path={ SortingRoutes.quicksort }>
          <SortAlgoPageTemplate
            running={ running }
            setRunning={ setRunning }
            array={ array }
            setArray={ setArray }
            resetArray={ () => setArray(randomArray(arrayLength)) }
            algorithm={ SortingAlgorithmEnum.Quicksort }
            interval={ 40 }
            { ...props }
          />
        </Route>
        <Route exact path={ SortingRoutes.mergesort }>
          <SortAlgoPageTemplate
            running={ running }
            setRunning={ setRunning }
            array={ array }
            setArray={ setArray }
            resetArray={ () => setArray(randomArray(arrayLength)) }
            algorithm={ SortingAlgorithmEnum.Mergesort }
            interval={ 50 }
            { ...props }
          />
        </Route>
        <Route exact path={ SortingRoutes.heapsort }>
          <SortAlgoPageTemplate
            running={ running }
            setRunning={ setRunning }
            array={ array }
            setArray={ setArray }
            resetArray={ () => setArray(randomArray(arrayLength)) }
            algorithm={ SortingAlgorithmEnum.Heapsort }
            interval={ 20 }
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
