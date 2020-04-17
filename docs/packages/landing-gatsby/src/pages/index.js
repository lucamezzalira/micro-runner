import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import BannerSection from '../containers/Charity/BannerSection';
import WorkSection from '../containers/Charity/WorkSection';
import HumanityBlock from '../containers/Charity/HumanityBlock';
import PromotionBlock from '../containers/Charity/PromotionBlock';
import BlogSection from '../containers/Charity/BlogSection';
import Footer from '../containers/Charity/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/Charity/charity.style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Charity" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <BannerSection />
            <WorkSection />
            <HumanityBlock />
            <PromotionBlock />
            <BlogSection />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
