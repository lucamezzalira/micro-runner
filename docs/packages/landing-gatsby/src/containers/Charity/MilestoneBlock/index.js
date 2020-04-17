import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, {
  MilestoneCard,
  CounterWrapper,
  CounterItem,
} from './milestoneBlock.style';

const MilestoneBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        milestoneData {
          title
          amount
          text
          counterItems {
            id
            amount
            title
          }
        }
      }
    }
  `);

  const { title, amount, text, counterItems } = data.charityJson.milestoneData;

  return (
    <Container id="milestone" width="1260px">
      <BlockWrapper>
        <MilestoneCard>
          <Text content={title} />
          <Heading content={amount} />
          <Text content={text} />
          <a href="#1" className="learn__more-btn">
            <span className="hyphen" />
            <span className="btn_text">Meet our Donors</span>
          </a>
        </MilestoneCard>
      </BlockWrapper>
      <CounterWrapper>
        {counterItems.map(item => (
          <CounterItem key={`counter_key${item.id}`}>
            <Heading as="h3" content={item.amount} />
            <Text content={item.title} />
          </CounterItem>
        ))}
      </CounterWrapper>
    </Container>
  );
};

export default MilestoneBlock;
