import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";

const ServiceCard = (props) => {
  const { image, text, heading, path, sessions, period, price, tagline } =
    props;
  return (
    <Link
      path="/course"
      sx={styles.serviceCard}
      onClick={() => localStorage.setItem("course", JSON.stringify(props))}
    >
      <Box sx={styles.image}>
        <Image src={image} alt={heading} className="img" />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{tagline}</Text>
      </Box>
    </Link>
  );
};

export default ServiceCard;

const styles = {
  serviceCard: {
    width: 300,
    height: 400,

    display: "flex",
    my: 10,
    mx: "auto",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "space-evenly",

    backgroundColor: "#FFFFFF",

    borderRadius: 10,
    boxShadow: "0px 5px 10px rgb(69 88 157 / 20%)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      boxShadow: " 10px 10px 24px rgba(69, 88, 157, 0.10)",
      transform: "scale(1.1)",
    },
  },
  image: {
    borderBottom: "1px solid black",
    img: {
      width: 250,
      height: 250,
      objectFit: "contain",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: "23px",
      lineHeight: 1,
      py: 10,
    },
    p: {
      fontSize: "20px",
      lineHeight: 1.87,
      color: "#00b4d8",
    },
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
