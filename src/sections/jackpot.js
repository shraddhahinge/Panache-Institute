import React from "react";
import { Box, Container, Flex, Image, Text, Heading } from "theme-ui";
import JackpotCard from "components/cards/jackpot-card";
import jackpotImage from "assets/teaching.jpeg";
import jackpotImage1 from "assets/jackpot-1-1.png";
import jackpotImage2 from "assets/jackpot-1-2.png";

const JACKPOT_DATA = [
  {
    image: jackpotImage1,
    text: "Get your blood tests delivered at let home collect sample from the victory of the managments your blood tests.",
    heading: "Lessons with certified teachers who are native English speakers.",
  },
  {
    image: jackpotImage2,
    text: "Get your blood tests delivered at let home collect sample from the victory of the managments your blood tests.",
    heading: "Engaging program for kids",
  },
];

const Jackpot = () => {
  return (
    <Box as="section" sx={styles.jackpot}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Image src={jackpotImage} alt="jackpot image" />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Heading as="h4">About Us</Heading>
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
            {/* <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box> */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jackpot;

const styles = {
  jackpot: {
    pt: ["65px", null, null, null, "85px", null, "125px"],
  },
  flex: {
    // display: "flex",
    flexWrap: "wrap",
    // alignItems: "flex-start",
  },
  image: {
    flex: ["0 0 100%", null, null, null, null, "0 0 62.5%"],
    img: {
      maxWidth: ["100%", null, null, null, null, null, "none"],
      float: "right",
    },
  },
  content: {
    flex: ["0 0 100%", null, null, null, null, "0 0 37.5%"],
  },
  heading: {
    mb: "30px",
    pt: "20px",
    textAlign: ["center", null, null, null, null, "left"],
    pl: ["0", null, null, "30px"],
    maxWidth: ["80%", null, null, "100%"],
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
      color: "#0F2137",
      fontSize: ["23px", null, null, null, "20px"],
      // maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      // letterSpacing: "1px",
      lineHeight: 1.5,
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
