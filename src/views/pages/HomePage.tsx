import React from 'react';
import { BaseLayout } from 'views/components/layout/BaseLayout';
import { Header } from 'views/components/layout/Header';

const strings = {
  heading: 'BookLesson',
  text: 'Welcome to BookLesson.',
};

export const HomePage = () => (
  <BaseLayout>
    <Header heading={strings.heading} text={strings.text} />
  </BaseLayout>
);
