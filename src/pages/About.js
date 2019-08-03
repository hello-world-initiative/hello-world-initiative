import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Section from '../components/Section';
import Heading, { AlternateHeading } from '../components/Heading';
import LinkButton from '../components/LinkButton';
import Article from '../components/Article';

import pageData from '../data/pages';
const { about } = pageData;

const discordURL = 'https://discord.gg/CEGxS5k';
const meetupURL = 'https://www.meetup.com/thehwi';

const About = () => {
  return (
    <>
      <Header text="About Us" pageName="about" />
      <main>
        <Section color="dark">
          <Article>
            <Heading
              position="left"
              text={about.main.headings[0]}
              highlight={about.main.highlights[0]}
            />
            <p>{about.main.sections[0]}</p>
          </Article>
          <Article>
            <Heading
              position="right"
              text={about.main.headings[1]}
              highlight={about.main.highlights[1]}
            />
            <p>{about.main.sections[1]}</p>
          </Article>
          <Article>
            <Heading
              position="left"
              text={about.main.headings[2]}
              highlight={about.main.highlights[2]}
            />
            <p>{about.main.sections[2]}</p>
          </Article>
        </Section>
        <Section color="light">
          <Article>
            <AlternateHeading position="left">
              {about.bottom.heading}
            </AlternateHeading>
            <p>{about.bottom.body}</p>
          </Article>
          <div className="linkButton-container">
            <LinkButton
              to={discordURL}
              text="Discord"
              icon={['fab', 'discord']}
              type="regular"
            />
            <LinkButton
              to={meetupURL}
              text="Meetup"
              icon={['fab', 'meetup']}
              type="regular"
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default About;
