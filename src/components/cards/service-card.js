import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import arrowAngle from "assets/arrow-angle.svg";

const ServiceCard = ({ image, text, heading, path, width, height }) => {
  return (
    <Box sx={styles.serviceCard}>
      <Box sx={styles.image}>
        <Image
          src={image}
          alt={heading}
          className="img"
          sx={{ width: width || 300, height: height || 300 }}
        />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
      </Box>
      <Box sx={styles.button}>
        <Link
          sx={styles.link}
          path={path}
          ml={2}
          label="Enroll Now"
          variant="buttons.primary"
          target="_blank"
        />
      </Box>
    </Box>
  );
};

export default ServiceCard;

const styles = {
  // serviceCard: {
  //   width: "550px",
  //   height: "700px",
  //   overflow: "hidden",
  //   boxShadow: "0px 0px 15px -5px",
  //   mb: "20px",
  //   padding: "10px",
  //   display: "flex",
  //   // flexDirection: ['column', null, null, 'row'],
  //   flexDirection: "column",
  //   // textAlign: ["center", null, null, "left"],
  //   alignItems: "center",
  //   backgroundColor: "#FDF8E1",
  // },
  serviceCard: {
    width: "550px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // border: "1px solid black",
    boxShadow: "0px 0px 15px -5px",
    backgroundColor: "#FDF8E1",
    padding: "10px",
    margin: "10px",
  },
  image: {
    flexShrink: 0,
    textAlign: "center",
    height: 300,
    // border: "1px solid black",
    img: {
      // width: 300,
      // height: 300,
      // objectFit: "cover",
    },
  },
  content: {
    height: [null, null, null, "300px"],
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
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      mt: "20px",
      // mb: "20px",
      textAlign: "justify",
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
