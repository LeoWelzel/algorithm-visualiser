import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { Column } from './common/Column';
import { Row } from './common/Row';
import { Spacer } from './common/Spacer';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { DefaultPage } from './DefaultPage';
import { HomePage } from './HomePage';
import { Routes } from './routes';
import { SortPage } from './sorting/SortPage';
import { useWindowSize } from './common/useWindowSize';

import './App.scss'

export const App = () => {
  const windowSize = useWindowSize();
  const [bodyHeight, setBodyHeight] = useState(0);
  const [bodyWidth, setBodyWidth] = useState(0);
  const pageBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = pageBodyRef.current?.clientHeight;
    const width = pageBodyRef.current?.clientWidth;

    if (height)
      setBodyHeight(height);
    if (width)
      setBodyWidth(width);
  }, [windowSize])

  // TODO: page-body width and height

  return (
    <BrowserRouter>
      <Column className='page-container'>
        <Header/>
        <Row style={{ flex: 1 }}>
          <Spacer className='page-body-spacer'/>
          <div ref={ pageBodyRef } className='page-body'>
            <Switch>
              <Route exact={ true } path={ Routes.home } component={ HomePage }/>
              <Route exact={ true } path={ Routes.about } component={ AboutPage }/>
              <Route path={ Routes.sorting }>
                <SortPage
                  height={ bodyHeight }
                  width={ bodyWidth }
                />
              </Route>
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
