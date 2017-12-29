import React from 'react';
import Layout from '../components/Layout';

const Search = ({url}) => (
  <Layout>
      <div>Keyword is "{url.query.keyword}"</div>
  </Layout>
);

export default Search