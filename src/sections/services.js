import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import course1 from "assets/course1.png";
import course2 from "assets/course2.png";
import course3 from "assets/course3.png";
import course4 from "assets/course4.jpeg";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: course1,
    text: "This  public speaking course will help you become a more confident public speaker. In this course you will get in-depth information on developing an engaging program and delivering your presentation with power. You will learn how to identify your audience, create a basic outline of your speech, and organize your program in a way that makes the most sense. You will also learn how to overcome your nervousness, and a whole lot more!",
    heading: "Eloquent speaker",
    path: "#",
  },
  {
    image: course2,
    text: "Grammar encompasses the system and structure of a language, including the study of sentence structures, tenses, semicolons, apostrophes, prepositional phrases, and more! This includes English grammar and English grammar rules. This course is designed to help you increase your knowledge of grammar and make you less reliant on using apps and plugins to check grammar when sending emails at work. Learn about grammar points, indirect objects, passive voice, auxiliary verbs, and more.",
    heading: "Grammar Ready",
    path: "#",
  },
  {
    image: course3,
    text: "In this course we equip the students with our ancient calculation tricks which are helpful  to score better not just in schools but also in competitive exams anywhere.",
    heading: "Vedic ready",
    path: "#",
  },
  {
    image: course4,
    text: "More important than what you say is 'how' you say it. In this course we pursue a holistic approach to vocal training by incorporating exercises of voice modulation and intonation. Classes are real fun when students portray different characters of legendary  Shakespeare’s plays and other similar genre.",
    heading: "Performer",
    path: "#",
  },
  // {
  //   image: serviceImage5,
  //   text: "Get your info tests delivered at home collect a sample from the your progress tests.",
  //   heading: "Ultimate development",
  //   path: "#",
  // },
  // {
  //   image: serviceImage6,
  //   text: "Get your info tests delivered at home collect a sample from the your progress tests.",
  //   heading: "Online support",
  //   path: "#",
  // },
];
const Services = () => {
  return (
    <Box as="section" id="courses" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Discover our courses here"
          text="Courses we provide"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr"],
  },
};
