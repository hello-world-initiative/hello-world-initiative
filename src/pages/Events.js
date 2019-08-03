import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Heading, { AlternateHeading } from '../components/Heading';
import LinkButton from '../components/LinkButton';
import Article from '../components/Article';

import pageData from '../data/pages';
const { events } = pageData;

const meetupURL = 'https://www.meetup.com/thehwi';

const Events = () => {
  return (
    <>
      <Header text="Events" pageName="events" />
      <main>
        <Section color="dark">
          <Article>
            <Heading
              position="left"
              text={events.main.heading}
              highlight={events.main.highlight}
            />
            <p>{events.main.body}</p>
          </Article>
        </Section>
        <Section color="light">
          <AlternateHeading position="center">
            {events.bottom.heading}
          </AlternateHeading>
          <div className="linkButton-container">
            <LinkButton
              to={meetupURL}
              text="Meetup"
              icon={['fab', 'meetup']}
              type="solid"
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default Events;
