import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Heading from '../components/Heading'
import Article from '../components/Article'

const Home = () => {
  return (
    <>
      <Header text="Hello World Initiative" pageName="home" />
      <main class="container">
        <Section color="dark">
          <Article>
            <Heading position="left">Our mission</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, pariatur minus. Non consectetur autem quisquam culpa quo eos repudiandae, sunt voluptate sapiente amet illum ipsam dicta minima itaque consequuntur soluta corporis corrupti labore sint necessitatibus aliquam esse, accusamus, maxime qui! Eveniet qui repudiandae sit illum ea! Exercitationem perspiciatis voluptates nihil minima iure itaque? Aliquam voluptatum similique delectus quas ex quis, provident consequatur iste tempora fuga, id ea, quos quod. Unde consectetur velit fuga sequi, non ex animi libero amet aut aperiam nihil. Adipisci fugit reiciendis recusandae ipsum pariatur commodi corrupti dolores soluta non quos tenetur, ratione culpa voluptatum distinctio eum!</p>
          </Article>
        </Section>
      </main>
    </>
  )
}

export default Home;
