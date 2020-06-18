import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from 'views/pages/HomePage';

const Providers: FC = ({ children }) => <Router>{children}</Router>;

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route
      render={() => (
        <div>
          <p>Page Not Found</p>
        </div>
      )}
    />
  </Switch>
);

export const App = () => (
  <Providers>
    <Routes />
  </Providers>
);
