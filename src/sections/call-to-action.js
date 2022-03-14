import React from "react";
import { Box, Container, Flex, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";

import missionImage from "assets/mission_and_vision.png";
import JackpotCard from "components/cards/jackpot-card";
import jackpotImage1 from "assets/jackpot-1-1.png";
import jackpotImage2 from "assets/jackpot-1-2.png";
const CallToAction = () => {
  const JACKPOT_DATA = [
    {
      image: jackpotImage1,
      text: "To teach regardless of age and to help students to do away with the obstacles like  language barrier and try to push them ahead on their way to success by making them confident.",
      heading: "Passion to Profession",
    },
    {
      image: jackpotImage2,
      text: "Our aim is to provide everyone with quality education where they fall in love with learning.",
      heading: "Love to learn",
    },
    {
      image: jackpotImage2,
      text: "Going in sync with the skill India movement, we endeavour to equip everyone with communication and calculation skills required  in today's world.",
      heading: "Skill development",
    },
  ];
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            {/* <Text as="span">Our good mission</Text> */}
            <Heading as="h4">“Mission and Vision“</Heading>
            <Box sx={styles.jackpotCardBox}>
              {JACKPOT_DATA.map(({ image, heading, text }, index) => (
                <JackpotCard
                  image={image}
                  heading={heading}
                  text={text}
                  key={index}
                />
              ))}
            </Box>
            {/* <Text as="p">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </Text> */}
            {/* <Link
              path="https://forms.gle/2sG6pC6zy9X61Dat7/"
              target="_blank"
              sx={styles.button}
            >
              Enroll Now
            </Link> */}
          </Box>
          <Box sx={styles.images}>
            <Image
              src={missionImage}
              alt="call image"
              className="missionImage"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  callToAction: {
    mt: ["90px", null, null, null, "0"],
    pt: ["50px", null, null, null, "110px", null, "140px"],
  },
  flex: {
    flexWrap: "wrap",
    alignItems: "center",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 50%"],
    textAlign: ["center", null, null, null, "left"],
    pt: ["80px", null, null, null, "0"],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: 1,
    },
    h4: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      color: "#02073E",
      // fontSize: ["16px", null, null, "18px"],
      lineHeight: ["2", null, null, 2.33],
      mb: "30px",
    },
  },
  button: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
    textDecoration: "none",
  },
  images: {
    flex: ["0 0 100%", null, null, null, "0 0 50%"],
  },
  jackpotCardBox: {
    // display: ["grid", null, null, null, null, "block"],
    // gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
  },
};
