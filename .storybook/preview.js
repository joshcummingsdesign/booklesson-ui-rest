import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { CssBaseline } from '@material-ui/core';

const history = createMemoryHistory();

history.push = action('history.push');
history.replace = action('history.replace');
history.go = action('history.go');
history.goBack = action('history.goBack');
history.goForward = action('history.goForward');

addDecorator((story) => (
  <Fragment>
    <CssBaseline />
    <Router history={history}>{story()}</Router>
  </Fragment>
));
