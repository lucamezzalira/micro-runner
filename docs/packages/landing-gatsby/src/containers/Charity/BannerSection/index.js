import React from 'react';
import { Link } from 'gatsby';
// import Image from 'gatsby-image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from './bannerSection.style';

const BannerSection = () => {
  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <HighlightedText className="highlighted_text">
            <strong>DOWNLOAD</strong> npm install -g micro-runner
          </HighlightedText>
          <Heading content="Micro-Runner" />
          <Heading
            as="h3"
            content="a CLI playground for benchmarking your JavaScript code"
          />
          <Text content="Micro-Runner is a collection of projects for making microbenchmarking accessible to everyone and fun." />
          <Link className="learn__more-btn" to="/charity">
            <span className="hyphen" />
            <span className="btn_text">Explore Our Project</span>
          </Link>
        </TextArea>
        <ImageArea></ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
