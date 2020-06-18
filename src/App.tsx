import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'views/pages/Home';

const Providers: FC = ({ children }) => <Router>{children}</Router>;

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
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
