import React from 'react';
import Layout from '@components/ui/layout';
import Hero from '@components/hero/hero';
import Stores from '@components/stores/stores';

const HomePage = () => (
  <Layout>
    <Hero />
    <Stores />
  </Layout>
);

export default HomePage;
