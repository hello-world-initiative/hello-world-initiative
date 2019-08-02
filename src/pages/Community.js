import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Heading, { AlternateHeading } from '../components/Heading';
import LinkButton from '../components/LinkButton';
import Article from '../components/Article';

import pageData from '../data/pages';
const { community } = pageData;

const discordURL = 'https://discord.gg/CEGxS5k';

const Community = () => {
  return (
    <>
      <Header text="Community" pageName="community" />
      <main>
        <Section color="dark">
          <Article>
            <Heading position="left">{community.main.heading}</Heading>
            <p>{community.main.body}</p>
          </Article>
        </Section>
        <Section color="light">
          <AlternateHeading position="center">
            {community.bottom.heading}
          </AlternateHeading>
          <div className="linkButton-container">
            <LinkButton
              to={discordURL}
              text="Discord"
              icon={['fab', 'discord']}
              type="solid"
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default Community;
