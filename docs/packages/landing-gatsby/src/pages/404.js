import React from 'react';
import SEO from '../components/seo';
import ErrorSec from '../containers/Error';
import { ResetCSS } from 'common/src/assets/css/style';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <ResetCSS />
    <ErrorSec></ErrorSec>
  </>
);

export default NotFoundPage;
