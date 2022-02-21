import React, { Component } from "react";
import { Box, Container, Image, Heading, Text, Grid } from "theme-ui";
import Image1 from "assets/bannerSideImage_1.png";
import Image2 from "assets/bannerSideImage_2.jpeg";
import Image3 from "assets/bannerSideImage_3.jpg";
import Image4 from "assets/bannerSideImage_4.jpeg";
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
    text: "Parents save time and money they'd otherwise be spend on travelling to offline classes. Kids study in the comfortable home environment without the worry of catching any flu.",
    image: Image2,
  },
  {
    id: 3,
    title: "Age appropriate",
    text: "The program is focused on building the skills required today. Also, the batches are formed on the basis of age of students.",
    image: Image3,
  },
  {
    id: 4,
    title: "",
    text: "",
    image: Image4,
  },
];
const Features = () => {
  return (
    <Box sx={styles.features}>
      {/* as="section" id="courses" */}
      <Container>
        <BlockTitle
          // title="Discover our courses here"
          title="Features we provide"
        />
        <Grid>
          {featuresData.map(({ id, title, text, image }, index) => (
            <FeatureCard key={id} title={title} text={text} image={image} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  features: {
    display: ["block", "block", "none", "none"],
    mt: "20px",
  },
};
