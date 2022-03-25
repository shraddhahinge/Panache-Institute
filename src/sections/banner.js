import React from "react";
import { Box, Container, Image, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/core";

import banner1 from "assets/banner-1.png";
import banner2 from "assets/banner-2.jpeg";
import banner3 from "assets/banner3.webp";
import bannerIcon1 from "assets/banner-icon-1-1.svg";
import bannerIcon2 from "assets/banner-icon-1-2.svg";
import bannerIcon3 from "assets/banner-icon-1-3.svg";
import bannerIcon4 from "assets/banner-icon-1-4.svg";
import bannerIcon5 from "assets/banner-icon-1-5.svg";
import bannerIcon6 from "assets/banner-icon-1-6.svg";
import bannerIcon7 from "assets/dot-pattern.svg";
import checkMark from "assets/check-mark.svg";

import Carousel from "react-multi-carousel";
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
    image: banner1,
    list: [
      "Reading through phonetics.",
      "Builiding public speaking skills.",
      "Improving pronunciation.",
      "Basic lessons of grammar.",
      "Command over reading.",
      "Game based assessments.",
    ],
    heading: "Phonic and Reading classes for 4-7yrs old",
  },
  {
    id: 2,
    image: banner2,
    list: [
      "Enhancing presentation skills",
      "Extempore speech",
      "Group discussions",
      "Vast knowledge of grammar",
      "Critical thinking through debates",
      "Rapid vedic calculation tricks",
    ],
    heading: "English and Vedic Maths classes for 8-18 yrs old",
  },
  {
    id: 3,
    image: banner3,
    list: [
      "Fluency in speaking",
      "Confidence building",
      "Enhancing Vocabulary",
      "Focus on Enunciation",
      "Articulation and Pronunciation",
      "Public speaking skills",
    ],
    heading: "English Vinglish for homemakers and female professionals",
  },
];
const Banner = () => {
  const backgroundImagesAnimation = () => {
    return (
      <>
        <Image
          sx={styles.bannerIcon1}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon1}
        />
        <Image
          sx={styles.bannerIcon2}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon2}
        />
        <Image
          sx={styles.bannerIcon3}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon3}
        />
        <Image
          sx={styles.bannerIcon4}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon4}
        />
        <Image
          sx={styles.bannerIcon5}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon5}
        />

        <Image
          sx={styles.bannerIcon6}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon6}
        />
        <Image
          sx={styles.bannerIcon7}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon7}
        />
      </>
    );
  };
  return (
    <Box sx={styles.main} as="section" id="banner">
      <Heading as="h5">{"Learning Beyond School"}</Heading>
      {backgroundImagesAnimation()}
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
            {/* {backgroundImagesAnimation()} */}

            <Heading as="h4">{data?.heading}</Heading>
            <Container sx={styles.container}>
              <Box sx={styles.listContainer}>
                {data?.list.map((l, idx) => (
                  <Box key={l.id} sx={styles.paraContainer}>
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

export default Banner;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  main: {
    // overflow: "hidden",
    // height: "100vh",
    // pt: ["180px", null, null, null, "100px"],
    // pb: 10,
    // position: "relative",
    // border: "1px solid red",
    ".carousel-container": {
      width: "100%",

      mx: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        // opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
    h5: {
      fontSize: ["22px", null, null, "40px"],
      position: "absolute",
      top: "15%",
      textAlign: "center",
      width: "100%",
      color: "#00b4d8",
      fontFamily: "Fredoka, sans-serif",
      zIndex: 100,
    },
  },
  banner: {
    overflow: "hidden",
    height: "100vh",
    pt: ["180px", null, null, null, "100px"],
    pb: 10,
    px: 20,
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
    h4: {
      fontSize: ["35px", null, null, "60px"],
      lineHeight: [1.2, null, null, null],
      textAlign: ["center", null, null, null, "left"],
      color: "blue",
      position: "absolute",
      top: ["20%", null, null, null, "25%"],
      // left: "10%",
      width: ["80%", null, null, null, "100%"],
      color: "#edab12",
      // p: 1,
      // mb: [50, null, null, null],
      ml: [10, null, null, null, 50],
      mt: 10,
      zIndex: 1,
      fontWeight: "bold",
      fontFamily: "Hurricane, cursive",
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
    my: ["6px", null, null, null, 10],
    p: {
      mx: [1, null, null, null, 10],
    },
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-start",
    alignItems: "center",
    flex: [null, null, null, 1],
  },
  imageContainer: {
    flex: [null, null, null, 1],
    // border: "1px solid black",
  },
  checkMark: {
    width: 25,
    height: 25,
    fill: "#edab12",
  },

  bannerImage: {
    display: "block",
    borderRadius: "10px",
    width: [750, null, null, null, 1300],
    height: [200, null, null, null, 450],
    objectFit: "contain",
    position: "relative",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: ["column", null, null, null, "row"],
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid black",
    height: "100%",
    pt: 80,
  },
  bannerIcon1: {
    top: "20%",
    left: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: "20%",
    right: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: "-5%",
    right: "0px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: "0%",
    left: "0px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: "50%",
    left: "15%",
  },
  bannerIcon6: {
    bottom: "15%",
    left: "30%",
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: "8%",
    right: "3%",
  },
};
