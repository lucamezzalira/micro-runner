import React from 'react';
import { Link } from 'gatsby';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
  DonationProgressbar,
  BarArea,
  CurrentStatus,
  ShareArea,
  DonateButton,
  ShareList,
  Item,
} from './fundraiserSection.style';

import fundraisersImage from 'common/src/assets/image/charity/fundraisers.png';
import heartImage from 'common/src/assets/image/charity/heart.svg';

const FundraiserSection = () => {
  return (
    <SectionWrapper id="fundraisers">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="Browse Fundraisers" />
          <Text content="People around the world are raising money for what they are passionate about. " />
        </SectionHeader>

        <ContentArea>
          <ImageWrapper>
            <Image src={fundraisersImage} alt="Charity" />
          </ImageWrapper>

          <TextWrapper>
            <TextAndLink>
              <Heading as="h4" content="START FUNDRAISING" />
              <Link to="/charity" className="text_btn">
                SEE ALL <i className="flaticon-next" />
              </Link>
            </TextAndLink>
            <Heading as="h3" content="Helping Hand For The Homeless" />
            <Text
              content="We are organizing a program on January 20, 2019 to help the homeless people. Our aim is to provide them a 
            specific place to live.
            "
            />

            <DonationProgressbar>
              <BarArea>
                <CurrentStatus>
                  <strong>$95</strong> of $2,000 goal
                </CurrentStatus>
                <Text content="Last donation 9m ago" />
              </BarArea>
              <Heading as="h5" content="Raised by 10 people in 1 month" />
            </DonationProgressbar>

            <ShareArea>
              <DonateButton href="#donate" offset={81}>
                DONATE NOW <Image src={heartImage} alt="Charity Landing" />
              </DonateButton>
              <ShareList>
                <Item>Share on</Item>
                <Item>
                  <a
                    href="https://twitter.com/redqinc"
                    aria-label="social share link"
                    className="twitter"
                  >
                    <Icon icon={twitter} />
                  </a>
                </Item>
                <Item>
                  <a
                    href="https://www.facebook.com/redqinc/"
                    aria-label="social share link"
                    className="facebook"
                  >
                    <Icon icon={facebookSquare} />
                  </a>
                </Item>
              </ShareList>
            </ShareArea>
          </TextWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default FundraiserSection;
