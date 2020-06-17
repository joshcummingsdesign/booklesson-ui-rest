import React from 'react';
import { makeStyles, Container, Grid, Typography } from '@material-ui/core';

const strings = {
  heading: 'BookLesson',
  text: 'Welcome to BookLesson.',
};

export const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth='md'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h2' component='h1'>
            {strings.heading}
          </Typography>
          <Typography variant='body1'>{strings.text}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
}));
