import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Section from '../components/Section'
import Heading, {AlternateHeading} from '../components/Heading'
import LinkButton from '../components/LinkButton'

const discordURL = "https://discord.gg/CEGxS5k"
const meetupURL = "https://www.meetup.com/thehwi"

const About = () => {
  return (
    <>
      <Header text="About Us" pageName="about" />
      <main>
        <Section color="dark">
          <Heading position="left">
            Coding education should be free for <span className="heading-highlight">everyone</span>.
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem temporibus facere doloremque dolorem quisquam iusto labore ut quia molestias qui, eum atque fuga, cumque nesciunt corrupti. Tenetur illo ut, officia consectetur rem ea dolor fuga consequuntur dicta recusandae necessitatibus. Unde esse ipsam, suscipit facere voluptatibus accusamus commodi magni est itaque.</p>
          <Heading position="right">
            HWI is <span className="heading-highlight">community</span> based.
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur recusandae dolore culpa. Eligendi odit sint ut architecto similique dicta tempore soluta laborum pariatur numquam obcaecati natus id beatae maxime praesentium dolorum, blanditiis repudiandae minima in molestiae a, dolorem nemo doloribus? Rerum dignissimos totam velit unde quasi, enim error nisi nobis?</p>
          <Heading position="left">
            We use <span className="heading-highlight">free or inexpensive</span> online learning materials.
          </Heading>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima cumque tempore rerum cupiditate, nobis, hic libero quas non repellat, laborum labore sed eaque consectetur aspernatur officiis architecto fuga. Non accusamus molestias atque quia nihil officia voluptates ipsum. Recusandae dicta dolore ut possimus harum nihil molestiae fugiat quidem laudantium consequatur!</p>
        </Section>
        <Section color="light">
          <AlternateHeading>Want to get involved?</AlternateHeading>
          <p>We have an active online <Link to="/community">community</Link> where you can come to get help, chat about coding, or contribute to projects. We also plan regular <Link to="/events">events</Link> for members to work together and learn in person.</p>
          <div className="linkButton-container">
            <LinkButton
              to={discordURL}
              text="Discord"
              icon={["fab", "discord"]}
              type="regular"
            />
            <LinkButton
              to={meetupURL}
              text="Meetup"
              icon={["fab", "meetup"]}
              type="regular"
            />
          </div>
        </Section>
      </main>
    </>
  )
}

export default About
