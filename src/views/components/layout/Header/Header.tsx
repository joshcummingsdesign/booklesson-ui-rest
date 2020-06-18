import React from 'react';
import { makeStyles, Container, Grid, Typography } from '@material-ui/core';

interface IHeader {
  heading: string;
  text: string;
}

export const Header = ({ heading, text }: IHeader) => {
  const classes = useStyles();
  return (
    <header data-testid='header'>
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.content}>
              <Typography variant='h2' component='h1'>
                {heading}
              </Typography>
              <Typography variant='body1'>{text}</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
}));
