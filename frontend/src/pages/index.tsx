import React from 'react';
import Layout from '@components/ui/layout';
import Hero from '@components/hero/hero';
import Shops from '@components/stores/shops';

const HomePage = () => (
  <Layout>
    <Hero />
    <Shops />
  </Layout>
);

export default HomePage;
