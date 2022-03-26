import React from "react";
import { Box, Container, Flex, Image, Text, Heading } from "theme-ui";

import jackpotImage from "assets/teaching.jpeg";

import BlockTitle from "components/block-title";

const Jackpot = () => {
  return (
    <Box as="section" id="about" sx={styles.jackpot}>
      <BlockTitle
        title="About Us"
        // text="Courses we provide"
      />
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Image src={jackpotImage} alt="jackpot image" />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Text as="p">
                <Text as="span">PANACHE</Text> has been founded by{" "}
                <Text as="span">CA Neha Agarwal</Text> who has worked in{" "}
                <Text as="span">Deloitte, Bangalore</Text> during the early days
                of her career. Her first venture,{" "}
                <Text as="span">KIDDOCRAFT</Text> aimed at teaching concepts
                through crafts which involved learning with fun. Then to broaden
                the horizon, <Text as="span">PANACHE</Text> was incepted where
                we have right courses for you at affordable fee structure,
                whether you want to develop your English communication skills or
                calculation speed. In order to keep up with the changing times,
                we ensure regular upgrade and thus, keep updating, improving and
                even reconstructing our courses time to time to suit to a wide
                section of learners.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

const styles = {
  jackpot: {
    pt: ["2px", null, null, null, "20px", null, "20px"],
    pb: ["10px", null, null, null, "60px", null, "60px"],
    mt: [null, null, null, null, "60px", null, "60px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  image: {
    flex: ["0 0 100%", null, null, null, null, "0 0 30%"],
    img: {
      width: "100%",
      float: "right",
    },
  },
  content: {
    flex: ["0 0 100%", null, null, null, null, "0 0 70%"],
  },
  heading: {
    mb: "30px",

    textAlign: "justify",
    pl: ["0", null, null, "30px"],

    mx: ["auto", null, null, "0"],
    span: {
      display: "block",
      fontSize: "18px",
      color: "primary",
      fontWeight: 700,
      lineHeight: 1,
      mb: "20px",
    },
    h4: {
      fontSize: ["23px", null, null, null, "40px"],
    },
    p: {
      fontSize: "20px",
      color: "#343D48",
      lineHeight: 1.73,
    },
    span: {
      fontWeight: 700,
      color: "#edab12",
    },
  },
  jackpotCardBox: {
    display: ["grid", null, null, null, null, "block"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
  },
};
