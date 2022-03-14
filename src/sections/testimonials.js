// import React from 'react';
// import { Box } from 'theme-ui';
// import SwiperCore, { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import BlockTitle from 'components/block-title';
// import TestimonialsCard from 'components/cards/testimonial-card';
// import testimonialsImage1 from 'assets/testimonial-1-1.png';
// import testimonialsImage2 from 'assets/testimonial-1-2.png';
// import testimonialsImage3 from 'assets/testimonial-1-3.png';
// import testimonialsImage4 from 'assets/testimonial-1-4.png';
// import testimonialsImage5 from 'assets/testimonial-1-5.png';
// import testimonialsImage6 from 'assets/testimonial-1-6.png';

// SwiperCore.use([Autoplay]);

// const TESTIMONIALS_DATA = [
//   [
//     {
//       image: testimonialsImage1,
//       text:
//         'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
//       username: '@hello.mimmie',
//       name: 'Minnie Horn',
//     },
//     {
//       image: testimonialsImage2,
//       text:
//         'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
//       username: '@merryn.manley',
//       name: 'Merryn Manley',
//     },
//   ],
//   [
//     {
//       image: testimonialsImage3,
//       text:
//         'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
//       username: '@hi.veona',
//       name: 'Veona Watson',
//     },
//     {
//       image: testimonialsImage4,
//       text:
//         'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
//       username: '@hey.nku',
//       name: 'Paseka Nku',
//     },
//   ],
//   [
//     {
//       image: testimonialsImage5,
//       text:
//         'Thank you for all your help. Your service was excellent and very FAST.',
//       username: '@cherice.me',
//       name: 'Cherice Justin',
//     },
//     {
//       image: testimonialsImage6,
//       text:
//         'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
//       username: '@myself.thais',
//       name: 'Thais Carballal',
//     },
//   ],
//   [
//     {
//       image: testimonialsImage1,
//       text:
//         'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
//       username: '@hello.mimmie',
//       name: 'Minnie Horn',
//     },
//     {
//       image: testimonialsImage2,
//       text:
//         'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
//       username: '@merryn.manley',
//       name: 'Merryn Manley',
//     },
//   ],
//   [
//     {
//       image: testimonialsImage3,
//       text:
//         'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
//       username: '@hi.veona',
//       name: 'Veona Watson',
//     },
//     {
//       image: testimonialsImage4,
//       text:
//         'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
//       username: '@hey.nku',
//       name: 'Paseka Nku',
//     },
//   ],
//   [
//     {
//       image: testimonialsImage5,
//       text:
//         'Thank you for all your help. Your service was excellent and very FAST.',
//       username: '@cherice.me',
//       name: 'Cherice Justin',
//     },
//     {
//       image: testimonialsImage6,
//       text:
//         'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
//       username: '@myself.thais',
//       name: 'Thais Carballal',
//     },
//   ],
// ];

// const Testimonials = () => {
//   const testimonialCarousel = {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     speed: 1000,
//     centeredSlides: true,
//     autoHeight: true,
//     autoplay: {
//       waitForTransition: false,
//       delay: 4000,
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 20,
//       },
//     },
//   };
//   return (
//     <Box as="section" id="testimonials" sx={styles.testimonials}>
//       <BlockTitle
//         title="What client say about us"
//         text="Customer testimonial"
//       />
//       <Swiper {...testimonialCarousel}>
//         {TESTIMONIALS_DATA.map((item, index) => (
//           <SwiperSlide key={index}>
//             {item.map(({ image, text, name, username }, _index) => (
//               <TestimonialsCard
//                 image={image}
//                 text={text}
//                 name={name}
//                 key={_index}
//                 username={username}
//               />
//             ))}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default Testimonials;

// const styles = {
//   testimonials: {
//     backgroundColor: '#F4F4F6',
//     pt: ['80px', null, null, null, '80px', null, '100px'],
//     pb: ['60px', null, null, null, '80px', null, '120px'],
//   },
// };

/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import Carousel from "react-multi-carousel";
import BlockTitle from "components/block-title";
import ButtonGroup from "components/button-group";
import Avatar1 from "assets/testimonial-1-1.png";
import Avatar2 from "assets/testimonial-1-2.png";
import Avatar3 from "assets/testimonial-1-3.png";
import Avatar4 from "assets/testimonial-1-4.png";
import { Link } from "components/link";
import { useState } from "react";
import ReadMoreReact from "read-more-react";

const data = [
  {
    id: 1,
    // title: "Lovely Kid Feedback",
    description:
      "Thankyou ma'am for teaching my child good things. The normal study is to manage life but this study is useful for life time.",
    avatar: Avatar1,
    // image: StudentFeedback1,
    name: "Om",
    designation: "Mother of Grade-1 student",
    review: 4,
  },
  {
    id: 2,
    // title: "Happy Student Feedback",
    description:
      "Thank you ma'am for always motivating. Learning from you was a great experience. You taught with great patience and enthusiastically. Before learning from you neither I was able to express my views nor speak up frequently and fluently. But you really transformed me. You made me confident about myself and always encouraged me to do more. Your sessions were very interactive. And the thing I like the most about the course is Group discussions. Thank you ma'am for providing great knowledge to me.",
    avatar: Avatar2,
    // image: StudentFeedback2,
    name: "Anshika",
    designation: "Grade-12 student",
    review: 5,
  },
  {
    id: 3,
    // title: "Lovely Kid Feedback",
    description:
      "Neha ma'am is my favourite because she has some special qualities e.g cute, good, honest, clean heart and one important thing soft voice. She is very sweet and amazing!!! I love my Neha ma'am very much.",
    avatar: Avatar3,
    // image: StudentFeedback1,
    name: "Arisha Rana",
    designation: "Grade-4 student",
    review: 5,
  },
  // {
  //   id: 4,
  //   title: "Happy Student Feedback",
  //   description:
  //     "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  //   avatar: Avatar4,
  //   image: StudentFeedback2,
  //   name: "Denny Hilguston",
  //   designation: "@denny.hil",
  //   review: 4,
  // },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  const [readMore, setReadMore] = useState(false);
  // const readMorePara = (text) => {
  //   let text1 = text.substring(0, 80);
  //   let text2 = text.substring(101);

  //   return (
  //     <Box>
  //       <Text as="span">{text1}</Text>
  //       {readMore ? (
  //         <Text as="span">{text2}</Text>
  //       ) : (
  //         <>
  //           <Text as="span">...</Text>
  //           <Text
  //             // // path="https://forms.gle/2sG6pC6zy9X61Dat7/"
  //             // target="_blank"
  //             onClick={() => setReadMore(!readMore)}
  //             sx={{ color: "blue", cursor: "pointer" }}
  //           >
  //             Read More
  //           </Text>
  //         </>
  //       )}
  //     </Box>
  //   );
  // };
  const readMorePara = (text) => {
    return (
      <ReadMoreReact
        text={text}
        min={80}
        ideal={100}
        max={200}
        readMoreText={<Text sx={{ color: "blue" }}>Read More</Text>}
      />
    );
  };
  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <BlockTitle
        title="What people say about us"
        // text="Student testimonial"
      />
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              {/* <Image src={item.image} sx={styles.feedbackImg} /> */}
              <Text sx={styles.description}>
                {item.description.length > 150 ? (
                  readMorePara(item.description)
                ) : (
                  <Text>{item.description}</Text>
                )}
              </Text>

              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
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
      // mr: ["auto", null, null, null, null, null, null, "-220px"],
      mr: "auto",
      ml: "auto",
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
  // feedbackImg: {
  //   width: 200,
  //   height: 200,
  //   objectFit: "contain",
  // },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
        li: {
          width: "393px",
        },
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "yellow",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
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
    fontSize: "20px",
    color: "#343D48",
    lineHeight: 1.73,
    fontWeight: "normal",
    // color: "text",
    // lineHeight: [1.85, null, 2],
  },
  heading: {
    // fontSize: [1, null, null, 2],
    fontSize: "22px",
    color: "#343D48",
    lineHeight: 1.73,
    fontWeight: 700,
    mb: "3px",
    // color: "text",
    // lineHeight: 1.3,
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    // fontSize: 1,
    // lineHeight: 1.4,
    fontSize: "18px",
    // color: "#343D48",
    lineHeight: 1.73,
  },
};
