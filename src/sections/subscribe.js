import React from "react";
import { Button, Input, Box, Container, Heading, Text, Image } from "theme-ui";
import logoImage from "../assets/panache.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
const SOCIAL_LOGO = [
  {
    id: 1,
    image: whatsapp,
  },
  {
    id: 2,
    image: facebook,
  },
  {
    id: 3,
    image: instagram,
  },
  {
    id: 4,
    image: linkedin,
  },
];
const Subscribe = () => {
  return (
    <Box as="section" sx={styles.subscribe}>
      <Container sx={styles.container}>
        <Box className="left">
          <Heading as="h3">Improve your soft skills</Heading>
          <Text as="p">
            Simplified & straight to the point courses created for you. Maximize
            your results
          </Text>
          <Box as="form" sx={styles.form}>
            <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
              Email
            </Box>
            <Input
              placeholder="Enter your email"
              type="email"
              id="subscribeEmail"
              sx={styles.input}
            />
            <Button type="submit" sx={styles.button}>
              Subscribe us
            </Button>
          </Box>
          <Box sx={styles.socialContainer}>
            <Text as="p">Follow us on</Text>
            <Box sx={styles.logoContainer}>
              {SOCIAL_LOGO?.map(({ id, image }, idx) => (
                <Image
                  src={image}
                  sx={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
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
      {/* <Box sx={styles.socialContainer}>
        <Text as="p">Follow us on</Text>
        <Box sx={styles.logoContainer}>
          {SOCIAL_LOGO?.map(({ id, image }, idx) => (
            <Image
              src={image}
              sx={{
                width: 40,
                height: 40,
                objectFit: "contain",
              }}
            />
          ))}
        </Box>
      </Box> */}
    </Box>
  );
};

export default Subscribe;

const styles = {
  subscribe: {
    py: ["80px", null, null, null, "80px", "40px", "60px"],
    // padding: "10px",
    backgroundColor: "#020718",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
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
      // letterSpacing: ["-0.5px"],
      textAlign: "center",
      width: ["100%", null, null, "auto"],
      mx: [null, null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },
  form: {
    width: [null, null, null, "100%"],
    maxWidth: ["555px"],
    mx: ["auto"],
    display: ["flex"],
    flexDirection: ["column", null, null, "row"],
    // justifyContent: "center",
    flexWrap: ["wrap"],
    mt: ["30px", null, null, null, "60px"],
    // mx: "auto",
  },
  input: {
    width: [250, null, null, "100%"],
    maxWidth: [null, null, "370px", "380px"],
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255, .08)",
    outline: "none",
    color: "rgba(255,255,255, .8)",
    fontSize: "16px",
    pl: ["0px", null, null, "30px"],
    height: ["50px", null, null, "60px"],
    mr: ["0px", null, null, "15px"],
    textAlign: ["center", null, null, "left"],
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["18px"],
    color: "#020718",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: [250, null, null, "auto"],
    mt: ["10px", null, null, "0"],
    mx: [null, null, null, "0"],
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.8",
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
    width: [null, null, null, 450],
    // textAlign: "left",
    mt: [20, null, null, null, 80],
  },
};
