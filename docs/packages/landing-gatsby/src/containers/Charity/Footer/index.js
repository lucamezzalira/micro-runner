import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, { CopyrightText, SocialList } from './footer.style';

const Footer = ({ row }) => {
  return (
    <FooterWrapper>
      <Container width="1260px">
        <Box className="row copyright" {...row}>
          <CopyrightText>
            <Text
              className="text"
              content="© 2020 Luca Mezzalira. All Rights Reserved"
            />
          </CopyrightText>
          <SocialList>
            <li className="twitter">
              <a
                href="https://twitter.com/lucamezzalira"
                aria-label="social share link"
              >
                <Icon icon={twitter} />
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/lucamezzalira/micro-runner"
                aria-label="social share link"
              >
                <Icon icon={github} />
              </a>
            </li>
          </SocialList>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
};

export default Footer;
