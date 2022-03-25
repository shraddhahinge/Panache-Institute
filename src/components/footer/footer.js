/** @jsx jsx */
import React from "react";
import { jsx, Box, Text, Container } from "theme-ui";
import { Link } from "components/link";
import Logo from "components/logo";
import logoLight from "assets/panache.png";
export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Text sx={{ color: "#fff" }}>
          Copy right &copy; 2022. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ["40px", null, null, null, null, "30px", "40px"],
    backgroundColor: "#020718",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#ffffff",
      opacity: "0.05",
    },
  },
  container: {
    display: "flex",
    flexDirection: ["column", null, null, null, null, "row"],
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
  },
  linksWrap: {
    mt: ["15px", null, null, null, null, "0"],
    display: "flex",
    flexWrap: "wrap",
    a: {
      fontSize: ["14px", null, null, null, "16px"],
      color: "#ffffff",
      transition: "all 500ms ease",
      "&:hover": { opacity: 0.7 },
    },
    "a+a": { ml: ["15px", null, null, null, "35px"] },
  },
};
