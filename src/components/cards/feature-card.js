import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";

const FeatureCard = ({ image, text, title, path }) => {
  return (
    <Box sx={styles.featureCard}>
      <Box sx={styles.image}>
        <Image
          src={image}
          alt={title}
          className="img"
          //   sx={{ width: width || 300, height: height || 300 }}
        />
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
    // justifyContent: "space-between",
    // border: "1px solid black",
    // boxShadow: "0px 0px 15px -5px",
    // backgroundColor: "#FDF8E1",
    padding: "10px",
    // margin: "10px",
  },
  image: {
    flexShrink: 0,
    // textAlign: "center",
    // height: 300,
    // border: "1px solid black",
    img: {
      width: 250,
      height: 250,
      objectFit: "contain",
    },
  },
  content: {
    // height: [null, null, null, "300px"],
    // margin: ["0", null, null, "20px"],
    margin: "10px",
    // mt: ["20px", null, null, "0px"],
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "flex-start",
    // justifyContent: "space-between",
    // border: "2px solid gray",
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: "23px",
      lineHeight: 1,
      textAlign: "center",
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.2,
      color: "#343D48",
      mt: "10px",
      // mb: "20px",
      textAlign: "center",
      width: "80%",
      mx: "auto",
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
