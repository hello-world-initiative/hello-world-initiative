import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Article from '../components/Article';

import pageData from '../data/pages';
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
        </Section>
      </main>
    </>
  );
};

export default Home;
