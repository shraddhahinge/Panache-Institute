import React, { useState } from "react";
import { Button, Input, Box, Container, Heading, Text, Image } from "theme-ui";
import logoImage from "../assets/panache.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/gmail.png";

import Footer from "components/footer/footer";
const SOCIAL_LOGO = [
  {
    id: 1,
    link: "https://wa.me/message/AT5K42DIDLQCF1",
    image: whatsapp,
  },
  {
    id: 2,
    link: "https://www.facebook.com/askpanache/",
    image: facebook,
  },
  {
    id: 3,
    link: "https://www.instagram.com/panache_learning/",
    image: instagram,
  },
  {
    id: 4,
    link: "https://www.linkedin.com/company/panache-learning/",
    image: linkedin,
  },
  {
    id: 5,
    link: `mailto:panache1983@gmail.com?subject = How do I enroll in course?`,
    image: email,
  },
];
const Subscribe = () => {
  const [email, setEmail] = useState(null);
  return (
    <Box as="section" id="subscribe" sx={styles.subscribe}>
      <Container sx={styles.container}>
        <Box className="left">
          <Heading as="h3">Improve your soft skills</Heading>
          <Text as="p">
            Simplified & straight to the point courses created for you.
          </Text>

          <Box sx={styles.socialContainer}>
            <Text as="p">Connect with us on</Text>
            <Box sx={styles.logoContainer}>
              {SOCIAL_LOGO?.map(({ id, link, image }, idx) => (
                <a
                  href={link}
                  key={id}
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                >
                  <Image
                    src={image}
                    sx={{
                      width: 40,
                      height: 40,
                      objectFit: "contain",
                    }}
                  />
                </a>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // mb: "10px",
            width: "100%",
            // border: "2px solid white",
            flex: [null, null, null, 1],
          }}
        >
          <Image
            src={logoImage}
            sx={{
              width: [300, null, null, null, 400],
              height: [200, null, null, null, 350],
              objectFit: "contain",
              mx: "auto",
            }}
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Subscribe;

const styles = {
  subscribe: {
    pt: ["80px", null, null, null, "40px", "40px", "40px"],

    backgroundColor: "#020718",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    h3: {
      textAlign: "center",
      fontSize: ["23px", null, null, null, null, "80px", "80px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#fff",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["100%", null, null, "auto"],
      mx: [null, null, null, "0"],
    },
    p: {
      fontSize: ["20px"],
      color: "#fff",
      opacity: ".6",

      textAlign: "center",
      width: ["100%", null, null, "auto"],
      mx: [null, null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },

  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: ["column-reverse", null, null, "row"],
    // padding: 100,
    // border: "1px solid white",
    ".left": {
      flex: 1,
      // height: 800,
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: [null, null, null, 1],
    px: [null, null, null, 20],
    cursor: "pointer",
    "&:hover": {},
  },
  socialContainer: {
    display: [null, null, null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    width: [null, null, null, 500],
    // textAlign: "left",
    mt: [20, null, null, null, 80],
  },
};
