/** @jsx jsx */
import { jsx, Container, Flex, Image } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import logoDark from "assets/panache.png";
import backArrow from "assets/back-button.svg";

export default function CourseHeader() {
  return (
    <header sx={styles.header}>
      <Container sx={styles.container}>
        <a href="/">
          <Image src={backArrow} sx={{ width: 50, height: 50 }} />
        </a>
        <Image
          src={logoDark}
          sx={{ width: 150, height: 90, objectFit: "contain" }}
        />
      </Container>
    </header>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: "#00b4d8",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    color: "#ffffff",
    padding: "6.5px 24px",

    display: ["none", null, null, null, "inline-block"],

    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
    textDecoration: "none",
  },
  header: {
    color: "#000",
    fontWeight: "normal",
    // py: "5px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    // backgroundColor: "#001233",
    backgroundColor: "#fff",
    transition: "all 0.4s ease",

    boxShadow: "10px 5px 10px rgba(0, 0, 0, 0.06)",
    // "&.sticky": {
    //   backgroundColor: "#fff",
    //   color: "#000",
    py: "3px",
    //   transition: "500ms",
    //   transition: "all 0.4s ease",
    // },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    // width: [null, null, null, null, null, null, "1390px"],
    justifyContent: "space-between",
  },
};
