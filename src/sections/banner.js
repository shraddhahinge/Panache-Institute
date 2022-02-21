import React from "react";
import { Box, Container, Image, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import logoImage from "assets/panache-1.jpg";
import bannerImage from "assets/banner-mockup.png";
import bannerMainImage from "assets/banner.jpeg";
import bannerSide1 from "assets/bannerSideImage_1.png";
import bannerSide2 from "assets/bannerSideImage_2.jpeg";
import bannerSide3 from "assets/bannerSideImage_3.jpg";
import bannerSide4 from "assets/bannerSideImage_4.jpeg";
import bannerIcon1 from "assets/banner-icon-1-1.svg";
import bannerIcon2 from "assets/banner-icon-1-2.svg";
import bannerIcon3 from "assets/banner-icon-1-3.svg";
import bannerIcon4 from "assets/banner-icon-1-4.svg";
import bannerIcon5 from "assets/banner-icon-1-5.svg";
import bannerIcon6 from "assets/banner-icon-1-6.svg";
import bannerIcon7 from "assets/dot-pattern.svg";

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
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
        {/* feature images */}
        <Image
          sx={styles.bannerSide1}
          className="bannerIcon"
          alt="banner icon"
          src={bannerSide1}
        />
        <Image
          sx={styles.bannerSide2}
          className="bannerIcon"
          alt="banner icon"
          src={bannerSide2}
        />
        <Image
          sx={styles.bannerSide3}
          className="bannerIcon"
          alt="banner icon"
          src={bannerSide3}
        />
        <Image
          sx={styles.bannerSide4}
          className="bannerIcon"
          alt="banner icon"
          src={bannerSide4}
        />
        {/* <Image sx={styles.logo} src={logoImage} alt="logo image" /> */}
        <Box sx={styles.para}>
          <Heading as="h3">
            Institute where{" "}
            <Text as="span">The Team Of Passionate Teachers</Text> do more than
            just Teaching English
          </Heading>
          <Text as="p">
            {/* <Text as="span">PANACHE</Text> is one of the institute where the team
          of passionate teachers do more than just teaching English.  */}
            We evolve strong students who are confident and prepared to take on
            the challenges in our fast growing world. Fluency in English is the
            key to opening the door to your academic and professional dreams,
            and Panache Institute is here to help you achieve that dream.
          </Text>
        </Box>
        <Image src={bannerMainImage} sx={styles.bannerImage} alt="banner moc" />
      </Container>
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
  banner: {
    overflow: "hidden",
    backgroundColor: "#F9FBFD",
    textAlign: "center",
    pt: ["110px", null, null, null, "100px"],
    pb: 10,
    h3: {
      fontSize: ["25px", null, null, null, "40px"],
      width: ["90%", null, null, null, "50%"],
      mx: "auto",
      textAlign: "center",
      lineHeight: 1.4,
      fontWeight: "bold",
      span: {
        color: "#edab12",
      },
    },
    p: {
      fontSize: ["20px", null, null, "20px", "20px", "20px", "20px"],
      // fontSize: "18px",
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 500,
      width: ["90%", null, null, null, "50%"],
      // textAlign: "justify",
      maxWidth: ["100%", null, null, "55%", "500px", "940px", "980px"],
      mx: "auto",
      mt: "10px",
      mb: ["40px", null, null, "65px"],
      span: {
        color: "#edab12",
        fontWeight: 600,
      },
    },
  },
  para: {
    mt: "30px",
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
    mx: "auto",
    borderRadius: "10px",
    position: "relative",
    maxWidth: ["100%", null, null, "80%", null, "60%"],
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
      // display: [null, null, null, "block"],
    },
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
    top: "10%",
    left: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: "10%",
    right: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: "40px",
    right: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: "130px",
    left: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: "50%",
    left: "15%",
  },
  bannerIcon6: {
    bottom: "-65px",
    left: "0px",
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: "30%",
    right: "0%",
  },
};
