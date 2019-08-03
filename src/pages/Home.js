import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Article from '../components/Article';

import pageData from '../data/pages';
import LinkPlain from '../components/LinkPlain';
const { home } = pageData;

const Home = () => {
  return (
    <>
      <Header text="Hello World Initiative" pageName="home" />
      <main className="container">
        <Section color="dark">
          <Article>
            <Heading position="left">{home.heading}</Heading>
            <p>{home.body}</p>
          </Article>
          <div className="linkPlain-container">
            <LinkPlain to="/about" text="Learn More" />
          </div>
        </Section>
      </main>
    </>
  );
};

export default Home;
