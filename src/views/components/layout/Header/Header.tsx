import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface IHeader {
  heading: string;
  text: string;
}

export const Header = ({ heading, text }: IHeader) => {
  const classes = useStyles();
  return (
    <div data-testid='header' className={classes.root}>
      <Typography variant='h2' component='h1'>
        {heading}
      </Typography>
      <Typography variant='body1'>{text}</Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
}));
