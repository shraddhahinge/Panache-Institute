import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
const JackpotCard = ({ image, heading, text }) => {
  return (
    <Box sx={styles.jackpotCard}>
      <Box sx={styles.image}>
        <Image sx={styles.icon} src={image} alt={heading} />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
      </Box>
    </Box>
  );
};

export default JackpotCard;

const styles = {
  jackpotCard: {
    // p: ["30px", null, null, null, null, "15px 10px", "10px"],
    display: "flex",
    flexDirection: ["column", null, "column", null, "row"],
    textAlign: ["center", null, "center", null, "justify"],
    transition: "all 500ms ease",
    borderRadius: "10px",
    // backgroundColor: "#ffffff",

    // "&:hover": {
    //   boxShadow: " 0px 8px 24px rgba(69, 88, 157, 0.07)",
    // },
  },
  image: {
    flexShrink: "0",
    mr: ["0", null, null, "30px"],
    mb: ["20px", null, null, "0px"],
  },

  icon: {
    height: [60, null, 80, null, 60],
    width: [60, null, 80, null, 60],
  },

  content: {
    h3: {
      color: "#0F2137",
      fontSize: ["25px", null, "35px", null, "25px"],
      lineHeight: 1,
      fontWeight: 700,
      mb: "10px",
    },
    p: {
      fontSize: ["20px", null, "30px", null, "20px"],
      color: "#343D48",
      lineHeight: 1.73,
      width: ["100%", null, "100%", null, "80%"],
    },
  },
};
