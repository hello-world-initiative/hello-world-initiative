import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Heading, {AlternateHeading} from '../components/Heading'
import LinkButton from '../components/LinkButton'

const discordURL = "https://discord.gg/CEGxS5k"

const Community = () => {
  return (
    <>
      <Header text="Community" pageName="community" />
      <main>
        <Section color="dark">
          <Heading position="left">
            People learn better <span className="heading-highlight">together</span>.
          </Heading>
          <p>This is the top section. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis labore nam architecto, illo dolores. Optio voluptas similique non libero quia, vel illum aspernatur laudantium delectus, dignissimos animi doloremque, sequi sit corrupti nostrum temporibus repellat ratione ipsa tempore! Debitis iusto incidunt dolorum est quod veniam nisi ipsa molestiae error excepturi, hic, dolores rerum autem amet officia ullam in minima quibusdam eaque magnam quam provident saepe sed quo! Ex error sapiente beatae laboriosam dicta magni magnam. Quisquam mollitia odit expedita consequuntur.</p>
        </Section>
        <Section color="light">
          <AlternateHeading position="center">Join our community</AlternateHeading>
          <div className="linkButton-container">
            <LinkButton
              to={discordURL}
              text="Discord"
              icon={["fab", "discord"]}
              type="solid"
            />
          </div>
        </Section>
      </main>
    </>
  )
}

export default Community
