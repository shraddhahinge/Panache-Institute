import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";

const FeatureCard = ({ image, text, title, path }) => {
  return (
    <Box sx={styles.featureCard}>
      <Box sx={styles.image}>
        <Image src={image} alt={title} className="img" />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{title}</Heading>
        <Text as="p">{text}</Text>
      </Box>
    </Box>
  );
};

export default FeatureCard;

const styles = {
  featureCard: {
    width: [null, null, null, "550px"],
    height: [null, null, null, "300px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    // padding: "10px",
  },
  image: {
    flexShrink: 0,

    img: {
      width: 280,
      height: 280,
      objectFit: "contain",
    },
  },
  content: {
    margin: "10px",

    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: 1,
      textAlign: "center",
    },
    p: {
      fontSize: "20px",
      // fontSize: "18px",
      lineHeight: 1.25,
      color: "#02073E",
      // fontWeight: 500,
      width: ["100%", null, null, null, "80%"],
      mt: "10px",
      textAlign: "justify",
      mx: "auto",
      span: {
        fontWeight: 600,
      },
    },
  },
  button: {
    textAlign: "center",
  },

  link: {
    backgroundColor: "#00b4d8",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    color: "#ffffff",
    padding: "6.5px 24px",
    textDecoration: "none",
    display: "inline-block",
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },
};
