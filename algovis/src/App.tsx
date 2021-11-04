import React from 'react';
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
import { SortRouter } from './sorting/SortRouter';

import './App.scss'

export const App = () => {
  // TODO: page-body width and height

  return (
    <BrowserRouter>
      <Column className='page-container'>
        <Header/>
        <Spacer>
          <Row>
            <Spacer className='page-body-spacer'/>
            <div className='page-body'>
              <Switch>
                <Route exact={ true } path={ Routes.home } component={ HomePage }/>
                <Route exact={ true } path={ Routes.about } component={ AboutPage }/>
                <Route path={ Routes.sorting } component={ SortRouter } />
                <Route exact={ true } path={ '*' } component={ DefaultPage } />
              </Switch>
            </div>
            <Spacer className='page-body-spacer'/>
          </Row>
        </Spacer>
        <Footer/>
      </Column>
    </BrowserRouter>
  );
}
