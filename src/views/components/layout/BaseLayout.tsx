import React, { FC } from 'react';
import { Container, Grid } from '@material-ui/core';

export const BaseLayout: FC = ({ children }) => (
  <Container maxWidth='md'>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <main>{children}</main>
      </Grid>
    </Grid>
  </Container>
);
