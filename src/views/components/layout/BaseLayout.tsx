import React, { FC, Fragment } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Header } from 'views/components/layout/Header';

const strings = {
  heading: 'BookLesson',
  text: 'Welcome to BookLesson.',
};

export const BaseLayout: FC = ({ children }) => (
  <Fragment>
    <Header heading={strings.heading} text={strings.text} />
    <main>
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </main>
  </Fragment>
);
