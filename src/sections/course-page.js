import React, { useEffect, useState } from "react";
import { Box, Container, Image, Heading, Text, Grid } from "theme-ui";
import { keyframes } from "@emotion/core";
import courseImage from "assets/banner.jpeg";
import onlineTeaching from "assets/online-teaching.svg";
import calender from "assets/calender.svg";
import rupee from "assets/rupee.svg";
import { Link } from "components/link";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const CoursePage = () => {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [path, setPath] = useState("");
  const [sessions, setSessions] = useState(0);
  const [price, setPrice] = useState(0);
  const [period, setPeriod] = useState(0);
  useEffect(() => {
    let values = localStorage.getItem("course");
    let formatValues = JSON.parse(values);
    let data = formatValues;

    setHeading(data?.heading);
    setText(data?.text);
    setImage(data?.image);
    setPath(data?.path);
    setSessions(data?.sessions);
    setPrice(data?.price);
    setPeriod(data?.period);
  }, []);
  return (
    <Box sx={styles.banner}>
      <Box sx={styles.container}>
        {/* <Image sx={styles.logo} src={logoImage} alt="logo image" /> */}
        <Box sx={styles.content}>
          <Heading as="h3">{heading}</Heading>
          <Text
            as="p"
            sx={{
              width: ["100%", null, null, null, "80%"],
              mx: "auto",
              my: 20,

              textAlign: "justify",
              span: {
                color: "#edab12",
              },
            }}
          >
            {ReactHtmlParser(text)}
          </Text>
          <Grid
            sx={{
              mt: [20, null, null, 60],
              display: "grid",
              justifyContent: ["flex-start", null, null, null, "center"],
              alignItems: "center",
              //   border: "1px solid black",
              gridGap: "30px",
              gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"],
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                //   border: "1px solid black",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#edab12",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  mx: 10,
                }}
              >
                <Image src={onlineTeaching} sx={{ width: 30, height: 30 }} />
              </Box>
              <Text
                sx={{
                  width: [160, null, null, null, 155],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // textAlign: "left",
                  // border: "1px solid blue",
                }}
                as="p"
              >
                <Text sx={{ fontSize: ["40px", null, null, null, "50px"] }}>
                  {sessions}
                </Text>
                <Text>sessions</Text>
              </Text>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                //   border: "1px solid black",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#edab12",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  mx: 10,
                }}
              >
                <Image src={calender} sx={{ width: 30, height: 30 }} />
              </Box>
              <Text
                sx={{
                  width: 110,
                  display: "flex",
                  alignItems: "center",
                  // textAlign: "left",
                  justifyContent: "space-between",
                }}
                as="p"
              >
                <Text
                  sx={{ fontSize: ["40px", null, null, null, "50px"] }}
                >{`${period} `}</Text>
                <Text>{" months"}</Text>
              </Text>
            </Box>
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: ["column", null, null, null, "row"],
              justifyContent: "space-between",
              width: "80%",
              mx: "auto",
              mt: [20, null, null, 60],
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "flex-start",
              }}
            >
              <Image src={rupee} sx={{ width: 30, height: 30 }} />
              <Text sx={{ fontSize: "25px" }}>{price}</Text>
              <Text>/month</Text>
            </Box>
            <Link
              path={path}
              ml={2}
              target="_blank"
              label={"Enroll Now"}
              sx={styles.headerBtn}
              variant="buttons.primary"
            />
          </Box>
        </Box>
        <Box sx={styles.imageContainer}>
          <Image src={image} sx={styles.courseImage} alt="banner moc" />
        </Box>
      </Box>
    </Box>
  );
};

export default CoursePage;

const styles = {
  banner: {
    overflow: "hidden",
    // backgroundImage: `url(${backgroundImage})`,

    // height: [760, null, null, 700] /* You must set a specified height */,
    // height: "100vh",
    // backgroundPosition: "center" /* Center the image */,
    // backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    // backgroundSize: "cover",
    // backgroundColor: "#F9FBFD",
    // backgroundColor: "#eaf9ff", //"#CAF0F8",
    // textAlign: "center",
    pt: ["80px", null, null, null, "120px"],
    pb: 10,

    // height: 700,
    textAlign: "center",
    h3: {
      fontSize: ["25px", null, null, null, "40px"],
      //   width: ["100%", null, null, null, "80%"],
      // mx: "auto",
      lineHeight: 1.4,
      fontWeight: "bold",
      span: {
        color: "#edab12",
      },
    },
    p: {
      // fontSize: ["18px", null, null, "20px", "20px", "20px"],
      fontSize: "20px",
      lineHeight: 1.5,
      color: "#02073E",
      fontWeight: 500,
      //   width: ["100%", null, null, null, "100%"],
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
  container: {
    // position: "relative",
    display: "flex",
    flexDirection: ["column", null, null, null, "row"],
    justifyContent: "space-between",
    alignItems: "center",
    // border: "1px solid black",
    padding: 20,
    // width: "100%",
    // height: "100%",
  },
  courseImage: {
    display: "block",
    // mx: "auto",
    // mt: [40, null, null, 0],
    borderRadius: "10px",
    width: [750, null, null, null, 1400],
    height: [300, null, null, null, 500],
    objectFit: "contain",
    position: "relative",
    // maxWidth: ["100%", null, null, "80%", null, "60%"],
  },
  content: {
    flex: 1,
    padding: 10,
    // border: "1px solid red",
  },
  imageContainer: {
    flex: 1,
    // border: "1px solid black",
  },
  headerBtn: {
    backgroundColor: "#00b4d8",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    color: "#ffffff",
    padding: "6.5px 24px",

    display: "inline-block",

    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
    textDecoration: "none",
  },
};
