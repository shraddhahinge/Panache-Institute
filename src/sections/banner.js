import React from "react";
import { Box, Container, Image, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import bannerMainImage from "assets/banner.jpeg";
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
import { Link } from "components/link";
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
      "Game based lessons and assessments.",
    ],
  },
  {
    id: 2,
    image: banner2,
    list: [
      "Enhancing presentation skills",
      "Extempore speech",
      "Group discussions",
      "Vast knowledge of grammar",
      "Critical thinking development through debates",
      "Mastering calculations using Vedic tricks",
    ],
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
    <Box sx={styles.carouselWrapper}>
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
            {backgroundImagesAnimation()}
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
  carouselWrapper: {
    // display: "flex",
    // justifyContent: "flex-end",
    // // flexDirection: "column",
    // alignItems: "flex-end",
    // mt: "-35px",
    // px: "15px",
    // zIndex: 1,
    ".carousel-container": {
      width: "100%",
      // maxWidth: [
      //   "100%",
      //   null,
      //   null,
      //   "750px",
      //   "1000px",
      //   "1180px",
      //   null,
      //   "calc(50% + 865px)",
      // ],
      // mr: ["auto", null, null, null, null, null, null, "-220px"],
      // ml: "auto",
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
    // backgroundImage: `url(${backgroundImage})`,

    // height: [760, null, null, 700] /* You must set a specified height */,
    height: "100vh",
    // backgroundPosition: "center" /* Center the image */,
    // backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    // backgroundSize: "cover",
    // backgroundColor: "#F9FBFD",
    // backgroundColor: "#eaf9ff", //"#CAF0F8",
    // textAlign: "center",
    pt: ["180px", null, null, null, "100px"],
    pb: 10,
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
      // display: [null, null, null, "block"],
    },
    // height: 700,
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
      // maxWidth: ["100%", null, null, "55%", "500px", "940px", "980px"],
      // mx: "auto",
      // mt: "20px",
      // mb: ["40px", null, null, "65px"],
      // color: "#edab12",
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
  bannerSide1: {
    width: 220,
    height: 220,
    objectFit: "contain",
    top: "30%",
    left: "0px",
  },
  bannerSide2: {
    width: 220,
    height: 220,
    objectFit: "contain",
    bottom: "5%",
    left: "0px",
  },
  bannerSide3: {
    width: 220,
    height: 220,
    objectFit: "contain",
    top: "30%",
    right: "0px",
  },
  bannerSide4: {
    width: 220,
    height: 220,
    objectFit: "contain",
    bottom: "5%",
    right: "0px",
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

// <Image
//   sx={styles.bannerIcon1}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerIcon1}
// />
// <Image
//   sx={styles.bannerIcon2}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerIcon2}
// />
// <Image
//   sx={styles.bannerIcon3}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerIcon3}
// />
// <Image
//   sx={styles.bannerIcon4}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerIcon4}
// />
// <Image
//   sx={styles.bannerIcon5}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerIcon5}
// />
// <Image
//   sx={styles.bannerIcon6}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerIcon6}
// />
// <Image
//   sx={styles.bannerIcon7}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerIcon7}
// />
// {/* feature images */}
// <Image
//   sx={styles.bannerSide1}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerSide1}
// />
// <Image
//   sx={styles.bannerSide2}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerSide2}
// />
// <Image
//   sx={styles.bannerSide3}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerSide3}
// />
// <Image
//   sx={styles.bannerSide4}
//   className="bannerIcon"
//   alt="banner icon"
//   src={bannerSide4}
// />

{
  /* <Box as="section" id="banner" sx={styles.banner}>
  {backgroundImagesAnimation()}
  <Container sx={styles.container}>
    {/* <Image sx={styles.logo} src={logoImage} alt="logo image" /> */
}
//     <Box sx={styles.para}>
//       <Heading as="h3">
//         At <Text as="span">PANACHE </Text>
//         we do <Text as="span">more than</Text> just{" "}
//         <Text as="span">teaching</Text>
//       </Heading>
//       <Text as="p">
//         We evolve strong students who are confident and prepared to take on the
//         challenges in our fast growing world.
//       </Text>
//       <Link
//         path="/"
//         ml={2}
//         label="Enroll Now"
//         sx={styles.headerBtn}
//         variant="buttons.primary"
//       />
//     </Box>
//     <Box>
//       <Image src={bannerMainImage} sx={styles.bannerImage} alt="banner moc" />
//     </Box>
//   </Container>
// </Box>; */}
