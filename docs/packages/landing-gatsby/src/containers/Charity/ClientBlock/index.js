import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from 'common/src/components/UIElements/Logo';
import SectionWrapper, { ImageSlider, ImageSlide } from './clientBlock.style';

const ClientBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        clients {
          id
          link
          logo {
            publicURL
          }
          name
        }
      }
    }
  `);

  return (
    <SectionWrapper>
      <ImageSlider>
        <ImageSlide>
          {data.charityJson.clients.map(item => (
            <Logo
              key={`slide1__key${item.id}`}
              href={item.link}
              logoSrc={item.logo.publicURL}
              title={item.name}
            />
          ))}
        </ImageSlide>
        <ImageSlide>
          {data.charityJson.clients.map(item => (
            <Logo
              key={`slide2__key${item.id}`}
              href={item.link}
              logoSrc={item.logo.publicURL}
              title={item.name}
            />
          ))}
        </ImageSlide>
      </ImageSlider>
    </SectionWrapper>
  );
};

export default ClientBlock;
