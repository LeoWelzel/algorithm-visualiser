import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { Column } from './common/Column';
import { Row } from './common/Row';
import { Spacer } from './common/Spacer';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { DefaultPage } from './DefaultPage';
import { Routes } from './routes';
import { SortPage } from './sorting/SortPage';
import { useComponentSize } from './common/useComponentSize';

import './App.scss'
import { randomArray } from './util/randomArray';
import { SortingRoutes } from './sorting/routes';
import { SortAlgoPageTemplate } from './sorting/SortAlgoPageTemplate';
import { SortingAlgorithmEnum } from './sorting/algorithmEnum';

export const App = () => {
  const arrayLength = 64;

  const [array, setArray] = useState(randomArray(arrayLength));
  const [running, setRunning] = useState(false);

  const pageBodyRef = useRef<HTMLDivElement>(null);

  const sizeProps = useComponentSize(pageBodyRef);

  return (
    <BrowserRouter>
      <Column className='page-container'>
        <Header/>
        <Row style={{ flex: 1 }}>
          <Spacer className='page-body-spacer'/>
          <div ref={ pageBodyRef } className='page-body'>
            <Switch>
              <Route exact={ true } path={ Routes.home }>
              <SortPage
                { ...sizeProps }
              />
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
                  { ...sizeProps }
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
                  { ...sizeProps }
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
                  { ...sizeProps }
                />
              </Route>
              <Route exact={ true } path={ Routes.about } component={ AboutPage }/>
              <Route exact={ true } path={ '*' } component={ DefaultPage } />
            </Switch>
          </div>
          <Spacer className='page-body-spacer'/>
        </Row>
        <Footer/>
      </Column>
    </BrowserRouter>
  );
}
