import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Heading from '../components/Heading'

const About = () => {
  return (
    <>
      <Header text="About Us" pageName="about" />
      <main>
        <Section color="dark">
          <Heading postiion="left">
            Coding education should be free for <span className="heading-highlight">everyone</span>.
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem temporibus facere doloremque dolorem quisquam iusto labore ut quia molestias qui, eum atque fuga, cumque nesciunt corrupti. Tenetur illo ut, officia consectetur rem ea dolor fuga consequuntur dicta recusandae necessitatibus. Unde esse ipsam, suscipit facere voluptatibus accusamus commodi magni est itaque.</p>
          <Heading position="right">
            HWI is <span className="heading-highlight">community</span> based.
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur recusandae dolore culpa. Eligendi odit sint ut architecto similique dicta tempore soluta laborum pariatur numquam obcaecati natus id beatae maxime praesentium dolorum, blanditiis repudiandae minima in molestiae a, dolorem nemo doloribus? Rerum dignissimos totam velit unde quasi, enim error nisi nobis?</p>
          <Heading position="right">
            We use <span className="heading-highlight">free or inexpensive</span> online learning materials.
          </Heading>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima cumque tempore rerum cupiditate, nobis, hic libero quas non repellat, laborum labore sed eaque consectetur aspernatur officiis architecto fuga. Non accusamus molestias atque quia nihil officia voluptates ipsum. Recusandae dicta dolore ut possimus harum nihil molestiae fugiat quidem laudantium consequatur!</p>
        </Section>
        <Section color="light">
          <p>This is the bottom section. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis labore nam architecto, illo dolores. Optio voluptas similique non libero quia, vel illum aspernatur laudantium delectus, dignissimos animi doloremque, sequi sit corrupti nostrum temporibus repellat ratione ipsa tempore! Debitis iusto incidunt dolorum est quod veniam nisi ipsa molestiae error excepturi, hic, dolores rerum autem amet officia ullam in minima quibusdam eaque magnam quam provident saepe sed quo! Ex error sapiente beatae laboriosam dicta magni magnam. Quisquam mollitia odit expedita consequuntur.</p>
        </Section>
      </main>
    </>
  )
}

export default About
