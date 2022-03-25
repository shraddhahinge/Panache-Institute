/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import logoDark from "assets/panache.png";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo image={logoDark} className={className} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>
          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={"subscribe"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            // key={i}
          >
            <Link
              path="/"
              ml={2}
              label={"Contact Us"}
              sx={styles.headerBtn}
              variant="buttons.primary"
            />
          </ScrollLink>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
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
    padding: "10px 24px",
    // height: "40px",
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
    py: "5px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    // backgroundColor: "#001233",
    backgroundColor: "#fff",
    transition: "all 0.4s ease",

    "&.sticky": {
      backgroundColor: "#fff",
      color: "#000",
      py: "3px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      transition: "500ms",
      transition: "all 0.4s ease",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    // width: [null, null, null, null, null, null, "1390px"],
    justifyContent: "space-between",
    "@media screen and (max-width: 960px)": {},
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      fontSize: "18px",
      // color: "#02073E",
      color: "#000",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "30px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
    },
  },
};
