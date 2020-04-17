import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './featureSection.style';

const FeatureSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        featureData {
          title
          slogan
          features {
            id
            title
            description
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);

  const { title, slogan, features } = data.charityJson.featureData;

  return (
    <SectionWrapper id="feature">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map(item => (
            <BlogPost
              key={`option_key${item.id}`}
              thumbUrl={item.icon.publicURL}
              title={item.title}
              excerpt={item.description}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureSection;
