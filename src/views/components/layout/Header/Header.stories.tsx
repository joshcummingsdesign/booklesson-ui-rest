import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '.';

storiesOf('components/Header', module).add('default', () => (
  <Header heading='BookLesson' text='Welcome to BookLesson.' />
));
