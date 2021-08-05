import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  //   Link
} from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

import { Beers } from '../components/beers/Beers';
import { Cocktails } from '../components/cocktails/Cocktails';
import { OrdinaryDrinks } from '../components/ordinaryDrink/OrdinaryDrinks';
import { DrinkItem } from '../components/drinks/DrinkItem';

export const AppRouter = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <article>
        <Switch>
          <Route exact path='/' component={Cocktails} />
          <Route exact path='/cocktails' component={Cocktails} />
          <Route exact path='/ordinary_drinks' component={OrdinaryDrinks} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/drink/:drinkID' component={DrinkItem} />

          <Redirect to='/' />
        </Switch>
      </article>
    </Router>
  );
};
