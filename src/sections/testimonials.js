/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import Carousel from "react-multi-carousel";
import BlockTitle from "components/block-title";

import { useState } from "react";
import ReadMoreReact from "read-more-react";

var video1 = require("assets/video.mp4");
var video2 = require("assets/video1.mp4");
const data = [
  {
    id: 1,
    description:
      "Thank you ma'am for developing reading skills in my child at this tender age. Now he need not cram the spelling. Now, my child is also a PHONIC MASTER.",
    name: "Mother of Grade-1 student",
    review: 4,
  },
  {
    id: 2,

    description:
      "Learning from you ma'am was a great experience. You taught with great patience and enthusiasm. Earlier, neither was I able to express my views nor speak fluently. But you really transformed me. You make me feel confident about myself and always encourage me to do more. Your sessions were very interactive. And the thing I like the most about the course is Group discussions. Thank you ma'am for providing great knowledge to me",

    name: "Anshika",
    designation: "Grade-12 student",
    review: 5,
  },
  {
    id: 3,

    description:
      "Neha ma'am is my favourite because she has some special qualities e.g cute, good, honest, clean heart and one important thing soft voice. She is very sweet and amazing!!! I love my Neha ma'am very much.",

    name: "Arisha Rana",
    designation: "Grade-4 student",
    review: 5,
  },
  {
    id: 4,

    description:
      "Thanks a lot PANACHE for your ELOQUENT readers and writers course. Now after reading the chapters, he can frame the answers on his own. He scores good marks and has plenty of time to follow his dream of being a cricketer",

    name: "Mother of Grade-7 student",
    review: 4,
  },
  {
    id: 4,

    video: video1,

    name: "Father of Tisha Khanna",
    designation: "Grade-6 student",
    review: 4,
  },
  {
    id: 4,

    video: video2,

    name: "Moksh Ahuja",
    designation: "Grade-8 student",
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    slidesToSlide: 3,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function TestimonialCard() {
  const [readMore, setReadMore] = useState(false);
  const readMorePara = (text) => {
    return (
      <ReadMoreReact
        text={text}
        // min={200}
        // ideal={300}
        // max={400}
        readMoreText={
          <Text sx={{ color: "blue", cursor: "pointer" }}>Read More</Text>
        }
      />
    );
  };
  return (
    <Box
      as="section"
      id="testimonials"
      // sx={{ variant: "section.testimonial" }}
      sx={styles.carouselWrapper}
    >
      <BlockTitle
        title="What people say about us"
        // text="Student testimonial"
      />
      {/* <Box sx={styles.carouselWrapper}> */}
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoplay={false}
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
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data?.map((item) => (
          <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
            {item?.video ? (
              <video height="300px" width="300px" sx={{ mx: "auto" }} controls>
                <source src={item.video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            ) : (
              <Text sx={styles.description}>
                {item?.description?.length > 100 ? (
                  readMorePara(item.description)
                ) : (
                  <Text>{item.description}</Text>
                )}
              </Text>
            )}

            <div className="card-footer">
              <div className="reviewer-info">
                <Heading as="h4" sx={styles.heading}>
                  {item.name}
                </Heading>
                {item?.designation && (
                  <Text sx={styles.designation}>{item.designation}</Text>
                )}
              </div>
            </div>
          </Box>
        ))}
      </Carousel>
      {/* </Box> */}
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#fef0ef",
    // mt: "-35px",
    // px: "15px",
    pt: ["2px", null, "60px", null, "20px", null, "20px"],
    pb: ["10px", null, "60px", null, "60px", null, "60px"],
    mt: [null, null, "80px", null, "80px", null, "80px"],
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],

      mr: "auto",
      ml: "auto",

      ".react-multi-carousel-item": {
        transition: "all 0.25s",
        // height: "300px",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        // opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },

  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "6px",

    px: "30px",
    pt: "20px",
    pb: "10px",
    bg: "white",
    textAlign: "left",

    margin: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },

    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "30px"],
      ".reviewer-info": {
        textAlign: "center",
      },
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    // fontSize: [1, null, null, 2],
    fontSize: ["20px", null, "30px", null, "20px"],
    color: "#343D48",
    lineHeight: 1.73,
    fontWeight: "normal",
  },
  heading: {
    fontSize: ["22px", null, "30px", null, "22px"],
    color: "#343D48",
    lineHeight: 1.73,
    fontWeight: 700,
    mb: "3px",
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",

    fontSize: ["18px", null, "25px", null, "18px"],

    lineHeight: 1.73,
  },
};
