import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Heading, {AlternateHeading} from '../components/Heading'
import LinkButton from '../components/LinkButton'

const meetupURL = "https://www.meetup.com/thehwi"

const Events = () => {
  return (
    <>
      <Header text="Events" pageName="events" />
      <main>
        <Section color="dark">
          <Heading position="left">
            Come <span className="heading-highlight">meet up</span> with others who are learning to code.
          </Heading>
          <p>This is the top section. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis labore nam architecto, illo dolores. Optio voluptas similique non libero quia, vel illum aspernatur laudantium delectus, dignissimos animi doloremque, sequi sit corrupti nostrum temporibus repellat ratione ipsa tempore! Debitis iusto incidunt dolorum est quod veniam nisi ipsa molestiae error excepturi, hic, dolores rerum autem amet officia ullam in minima quibusdam eaque magnam quam provident saepe sed quo! Ex error sapiente beatae laboriosam dicta magni magnam. Quisquam mollitia odit expedita consequuntur.</p>
        </Section>
        <Section color="light">
          <AlternateHeading position="center">Join us at an event</AlternateHeading>
          <div className="linkButton-container">
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

export default Events
