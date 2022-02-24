import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import arrowAngle from "assets/arrow-angle.svg";

const ServiceCard = ({ image, text, heading, path, width, height }) => {
  return (
    <Box sx={styles.serviceCard}>
      {/* <Box sx={styles.container}> */}
      <Box sx={styles.image}>
        <Image
          src={image}
          alt={heading}
          className="img"
          // sx={{ width: width || 300, height: height || 300 }}
        />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
      </Box>
      {/* </Box> */}
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
  serviceCard: {
    width: "100%",
    height: [null, null, null, 300],
    display: "flex",
    mx: "auto",
    flexDirection: ["column", null, null, "row"],
    alignItems: ["center", null, null, "center"],
    // justifyContent: "space-between",
    // border: "1px solid black",
    // boxShadow: "0px 0px 1px -1px",
    backgroundColor: "#FFFFFF",
    padding: "10px",
    my: "20px",
    boxShadow: "0px 25px 100px rgb(69 88 157 / 8%)",

    "&:hover": {
      boxShadow: " 10px 10px 24px rgba(69, 88, 157, 0.10)",
    },
  },
  image: {
    flexShrink: 0,
    textAlign: "center",
    // height: 300,
    // border: "1px solid black",
    img: {
      width: 300,
      height: 300,
      objectFit: "contain",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
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
    width: ["100%", null, null, "60%"],
    textAlign: ["center", null, null, "left"],
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
    },
  },
  button: {
    // textAlign: "center",
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
