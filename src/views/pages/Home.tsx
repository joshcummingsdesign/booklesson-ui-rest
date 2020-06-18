import React from 'react';
import { BaseLayout } from 'views/components/layout/BaseLayout';
import { makeStyles, Typography } from '@material-ui/core';

const strings = {
  title: 'Home',
};

export const Home = () => {
  const classes = useStyles();
  return (
    <BaseLayout>
      <div className={classes.content}>
        <Typography variant='h5' component='h2'>
          {strings.title}
        </Typography>
      </div>
    </BaseLayout>
  );
};

const useStyles = makeStyles({
  content: {
    textAlign: 'center',
  },
});
