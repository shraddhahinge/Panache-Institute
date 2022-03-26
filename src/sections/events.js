import React from "react";
import { Box, Container, Image, Heading, Text } from "theme-ui";

import event1 from "assets/event1.jpg";
import event2 from "assets/event2.jpg";
import event3 from "assets/event3.jpg";
import event4 from "assets/event4.jpg";
import event5 from "assets/event5.jpg";
import checkMark from "assets/check-mark.svg";

import Carousel from "react-multi-carousel";
import BlockTitle from "components/block-title";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
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
    list: `Felicitation of <span>'International tongue twister day'</span>
Challenge winners...Atharv and Agrim!!🎉`,
  },
  {
    id: 2,
    image: event2,
    list: `Session in GD Goenka Public School on account of <span>"Origami Day"!!!</span>`,
  },
  {
    id: 3,
    image: event3,
    list: `<span>Grooming session</span> for Hospital staff!!`,
  },
  {
    id: 4,
    image: event4,
    list: `<span>Christmas celebration</span> in our centre and Little millennium School!!`,
  },
  {
    id: 5,
    image: event5,
    list: `<span>Graduation ceremony</span> of our Panachians!!!`,
  },
];
const Events = () => {
  return (
    <Box as="section" id="events" sx={styles.carouselWrapper}>
      <BlockTitle
        title="Events"
        // text="Courses we provide"
      />
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        // autoPlay
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
          <Box as="section" id="banner" key={data?.id} sx={styles.banner}>
            <Container sx={styles.container}>
              {/* <Image sx={styles.logo} src={logoImage} alt="logo image" /> */}
              <Box sx={styles.listContainer}>
                <Box sx={styles.paraContainer}>
                  {/* <Image src={checkMark} sx={styles.checkMark} /> */}
                  <Text as="p">{ReactHtmlParser(data?.list)}</Text>
                </Box>
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
    pt: ["2px", null, null, null, "20px", null, "20px"],
    pb: ["10px", null, null, null, "60px", null, "60px"],
    mt: [null, null, null, null, "80px", null, "80px"],
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
      // fontSize: ["30px", null, null, "30px", "30px", "50px", "50px"],
      fontSize: ["30px", null, null, "40px"],
      // fontSize: "18px",
      lineHeight: 1.25,
      textAlign: ["center", null, null, null, null],
      color: "#02073E",
      fontWeight: 500,
      width: ["100%", null, null, null, "80%"],
      fontFamily: "Shadows Into Light, cursive",
      span: {
        fontSize: ["40px", null, null, "30px", "30px", "50px", "50px"],
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
    width: 40,
    height: 40,
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
    width: [750, null, null, null, 1400],
    height: [300, null, null, null, 500],
    // width: "100%",
    // height: "100%",
    objectFit: "contain",
    position: "relative",
    // maxWidth: ["100%", null, null, "80%", null, "60%"],
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: ["column", null, null, null, "row"],
    justifyContent: ["space-between", null, null, null, "center"],
    alignItems: "center",
    // border: "1px solid black",
    height: "100%",
  },
};
