import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { Page } from './Page';
import { Routes } from './routes';
import { SortRouter } from './sorting/SortRouter';

export const App = () => {
  return (
      <BrowserRouter>
        <Page>
          <Switch>
            <Route exact={ true } path={ Routes.home } component={ HomePage }/>
            <Route exact={ true } path={ Routes.about } component={ AboutPage }/>
            <Route path={ Routes.sorting } component={ SortRouter } />
          </Switch>
        </Page>
      </BrowserRouter>
  );
}
