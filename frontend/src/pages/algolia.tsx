import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Layout from '@components/ui/layout';
import AlgoliaShopsBlock from '@components/stores/algolia/algolia-shops-block';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);

const Algolia = () => {
  return (
    <Layout>
      <InstantSearch indexName="Shop" searchClient={searchClient}>
        <AlgoliaShopsBlock />
        {/*<Pagination />*/}
      </InstantSearch>
    </Layout>
  );
};

export default Algolia;
