import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import arrowAngle from "assets/arrow-angle.svg";

const ServiceCard = ({ image, text, heading, path }) => {
  return (
    <Box sx={styles.serviceCard}>
      <Box sx={styles.image}>
        <Image src={image} alt={heading} className="img" />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
        {/* <Link sx={styles.link} path={path}>
          Learn More <Image src={arrowAngle} alt="angle icon" />
        </Link> */}
      </Box>
    </Box>
  );
};

export default ServiceCard;

const styles = {
  serviceCard: {
    display: "flex",
    // flexDirection: ['column', null, null, 'row'],
    flexDirection: "column",
    // textAlign: ["center", null, null, "left"],
    alignItems: "center",
  },
  image: {
    flexShrink: 0,
    img: {
      width: 300,
      height: 300,
    },
  },
  content: {
    ml: ["0", null, null, "30px"],
    mt: ["20px", null, null, "0px"],
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
      mb: "20px",
      textAlign: "justify",
    },
  },
  link: {
    color: "#3183FF",
    fontSize: "16px",
    fontWeight: 500,
    display: "inline-block",
    img: {
      ml: "5px",
    },
  },
};
