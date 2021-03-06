import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => (
  <Helmet title={title}>
    <html lang="ko" />
  </Helmet>
);

export default Head;
