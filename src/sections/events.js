import React from "react";
import { Box, Container, Image, Heading, Text } from "theme-ui";

import event1 from "assets/event1.jpg";
import event2 from "assets/event2.png";

import checkMark from "assets/check-mark.svg";

import Carousel from "react-multi-carousel";
import BlockTitle from "components/block-title";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const BANNER_DATA = [
  {
    id: 1,
    image: event1,
    list: [
      "Reading through phonetics.",
      "Builiding public speaking skills.",
      "Improving pronunciation.",
      "Basic lessons of grammar.",
      "Command over reading.",
      "Game based lessons and assessments.",
    ],
  },
  {
    id: 2,
    image: event2,
    list: [
      "Enhancing presentation skills",
      "Extempore speech",
      "Group discussions",
      "Vast knowledge of grammar",
      "Critical thinking development through debates",
      "Mastering calculations using Vedic tricks",
    ],
  },
];
const Events = () => {
  return (
    <Box sx={styles.carouselWrapper}>
      <BlockTitle
        title="Events"
        // text="Courses we provide"
      />
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        // customButtonGroup={<ButtonGroup />}
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {BANNER_DATA.map((data, idx) => (
          <Box as="section" id="banner" sx={styles.banner}>
            <Container sx={styles.container}>
              {/* <Image sx={styles.logo} src={logoImage} alt="logo image" /> */}
              <Box sx={styles.listContainer}>
                {data?.list.map((l) => (
                  <Box sx={styles.paraContainer}>
                    <Image src={checkMark} sx={styles.checkMark} />
                    <Text as="p">{l}</Text>
                  </Box>
                ))}
              </Box>
              <Box sx={styles.imageContainer}>
                <Image
                  src={data?.image}
                  sx={styles.bannerImage}
                  alt="banner moc"
                />
              </Box>
            </Container>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Events;

const styles = {
  carouselWrapper: {
    ".carousel-container": {
      width: "100%",
      pb: 50,

      mx: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  banner: {
    overflow: "hidden",

    pb: 10,
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },

    h3: {
      fontSize: ["35px", null, null, null, "60px"],
      width: ["100%", null, null, null, "80%"],
      // mx: "auto",
      lineHeight: 1.4,
      fontWeight: "bold",
      span: {
        color: "#edab12",
      },
    },
    p: {
      fontSize: ["18px", null, null, "20px", "20px", "25px", "30px"],
      // fontSize: "18px",
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 500,
      width: ["100%", null, null, null, "80%"],

      span: {
        fontWeight: 600,
      },
    },
  },
  para: {
    mt: "80px",
    textAlign: ["center", null, null, "left"],
  },
  paraContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    // border: "1px solid black",
    width: "100%",
    my: [2, null, null, null, 10],
    p: {
      mx: [1, null, null, null, 10],
    },
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    alignItems: "center",
    // border: "1px solid black",
    // padding: 5,
    // height: 450,
    // width: 800,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    // border: "1px solid black",
  },
  checkMark: {
    width: 25,
    height: 25,
    fill: "#edab12",
  },
  headerBtn: {
    backgroundColor: "#00b4d8",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    color: "#ffffff",
    padding: "6.5px 24px",
    // display: ["none", null, null, null, "inline-block"],
    display: "inline-block",
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
    textDecoration: "none",
  },
  logo: {
    display: "block",
    borderRadius: "10px",
    mx: "auto",
    boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)",
    width: 450,
    height: 300,
    // objectFit: "contain",
  },
  bannerImage: {
    display: "block",
    // mx: "auto",
    // mt: [40, null, null, 0],
    borderRadius: "10px",
    width: [750, null, null, null, 1300],
    height: [300, null, null, null, 450],
    objectFit: "contain",
    position: "relative",
    // maxWidth: ["100%", null, null, "80%", null, "60%"],
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: ["column", null, null, null, "row"],
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid black",
    height: "100%",
  },
};