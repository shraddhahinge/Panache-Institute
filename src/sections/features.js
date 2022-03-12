import React, { Component } from "react";
import { Box, Container, Image, Heading, Text, Grid } from "theme-ui";
import Image1 from "assets/bannerSideImage_1.png";
import Image2 from "assets/bannerSideImage_2.jpeg";
import Image3 from "assets/bannerSideImage_3.jpg";
import Image4 from "assets/bannerSideImage-4.png";
import BlockTitle from "components/block-title";
import FeatureCard from "components/cards/feature-card";

const featuresData = [
  {
    id: 1,
    title: "Experienced Teachers",
    text: "All our teachers have teaching experience of about a decade and are well-versed with online teaching too.",
    image: Image1,
  },
  {
    id: 2,
    title: "Classes from home",
    // text: "Parents save time and money they'd otherwise be spend on travelling to offline classes. Kids study in the comfortable home environment without the worry of catching any flu.",
    text: "We provide the new normal i.e online classes which are safe and cost effective too.",
    image: Image2,
  },
  {
    id: 3,
    title: "Age appropriate",
    // text: "The program is focused on building the skills required today. Also, the batches are formed on the basis of age of students.",
    text: "Peer groups are formed as per age and previous knowledge would be judged through a quick test.",
    image: Image3,
  },
  {
    id: 4,
    title: "Personal Mentoring",
    text: "Personal mentors, with whom you can interact via text messages to get hands-on experience over the course and can clear your doubts easily.",
    image: Image4,
  },
];
const Features = () => {
  return (
    <>
      <Box sx={styles.features}>
        <BlockTitle
          title="Why choose PANACHE?"
          // text="Courses we provide"
        />
        {/* as="section" id="courses" */}
        <Container sx={styles.container}>
          <Grid sx={styles.grid}>
            {featuresData.map(({ id, title, text, image }, index) => (
              <FeatureCard key={id} title={title} text={text} image={image} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Features;

const styles = {
  features: {
    py: ["100px", null, null, null, "110px", null, "140px"],

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    alignItems: "center",
    justifyContent: "space-between",
  },
};
