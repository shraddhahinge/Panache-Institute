import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import course1 from "assets/course1.png";
import course2 from "assets/course2.png";
import course3 from "assets/course3.jpeg";
import course4 from "assets/course4.png";
import course5 from "assets/course5.png";
import course6 from "assets/course6.jpeg";
import course7 from "assets/course7.jpeg";
import course8 from "assets/course8.jpeg";
import coursebg from "assets/coursebg1.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: course1,
    text: `<div>
        This course will help you become a more <span>confident public speaker.</span> In
        this course you will get, in-depth information on <span>developing an engaging
        speech</span> and delivering your <span>presentation with power.</span> You will learn how
        to identify your audience, create a basic outline of your speech, and
        <span>organize your content</span> in a way that makes the most sense. You will also
        learn how to overcome your nervousness, and a whole lot more!
      </div>`,
    heading: "Eloquent Writers & Speakers",
    tagline: "Kids aged 10 to 18yrs.",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 40,
    period: 3,
    price: 2000,
  },
  {
    image: course2,
    text: `Grammar encompasses the <span>system and structure of a language,</span> including the study of sentence structures, tenses, semicolons, apostrophes, prepositional phrases, and more! 
This course includes English grammar and its <span>rules.</span> It has been designed to help you increase your knowledge of grammar and make you less reliant on using apps and plugins to check grammar when sending emails at work. 
 
We also provide with the <span>comprehensive assessments</span> of the concepts delivered during classes.
`,
    heading: "Grammar Ready",
    tagline: "Kids aged 8 to 18yrs.",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 80,
    period: 4,
    price: 3000,
  },
  {
    image: course3,
    text: `The benefits of Vedic maths are numerous. To name a few:
    <ul>
<li>Fun-Filled way to do Math with high and accuracy.</li>
<li>Much Improved Academic <span>Performance.</span></li>
<li>Instant Results.</li>
<li><span>Sharpens your mind, increases mental agility and intelligence.</span></li>
<li>Develops both sides of your brain.</li> 
<li>Easy to master and apply.</li>
<li>Can be used in exams like CAT, CET, SAT, Banking Exams, FCAT,  etc.</li>
</ul>
`,
    heading: "The Magic of Vedic Maths",
    tagline: "Kids aged 11 to 16 yrs.",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 80,
    period: 6,
    price: 2000,
  },
  {
    image: course4,
    text: `More important than what you say is, <span>how you say</span> it. In this course we pursue a holistic approach to <span>vocal training</span> by incorporating exercises of voice modulation and intonation. Classes are real fun when students portray different <span>characters</span> of legendary  Shakespeare’s <span>plays</span> and other similar genre.
This course focuses on enunciation, articulation and pronunciation.
`,
    heading: "Performers",
    tagline: "Kids aged 11 to 14yrs",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 24,
    period: 2,
    price: 2000,
  },
  {
    image: course5,
    text: `In this course we work upon the <span>reading skills</span> which includes listening ,speaking and pronunciation of students by providing them with the basics of <span>phonetic sounds.</span>
It’s not just about reading, it involves <span>extracting the correct meaning, vocabulary building,</span> taking pauses at the correct places, voice modulation and much more.
`,
    heading: "Passionate Readers",
    tagline: "Kids aged 8 to 11 yrs.",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 50,
    period: 4,
    price: 2000,
  },
  {
    image: course7,
    text: `This course aims at giving <span>more power</span> to our home makers and professionals (girls and ladies) by equipping them with the sound knowledge of english language.
We work upon <span>pronunciations, fluency, vocabulary building</span> and much more.
We leave no stone unturned in building confidence and preparing you to face the challenges in your career or life due to communication barriers.
`,
    heading: "English Vinglish",
    tagline: "For HOMEMAKERS & female PROFESSIONALS",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 80,
    period: 4,
    price: 3000,
  },
  {
    image: course6,
    text: `Here we not only teach <span>phonic sounds</span> but also the real application of it i.e. <span>spelling building,</span> which relieves the kids from mugging-up spellings in their entire life.
Kids learn to read efficiently and effectively at a tender age. Also they are taught the art of framing sentences on their own.
`,
    heading: "Phonic Masters",
    tagline: "Kids aged 4 to 7 yrs.",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 120,
    period: 6,
    price: 3000,
  },
  {
    image: course8,
    text: `In this course we provide the knowledge about the routine <span>happenings around the world.</span> Also, the general facts which are apt for student’s age. 
The program is delivered in a <span>fun-filled</span> manner which makes kids curious to learn more.
`,
    heading: "Informed Panachians",
    tagline: "Kids aged 8 to 11yrs.",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSel-Iy2KRI_kO-H5d7kPswTXaHMVwY4Ej2r_s5Dfhu5FWkPbQ/viewform?usp=sf_link",
    sessions: 40,
    period: 3,
    price: 2000,
  },
];
const Services = () => {
  return (
    <Box as="section" id="courses" sx={styles.services} className="wave">
      <Container className="container">
        <BlockTitle
          title="Courses"
          // text="Courses we provide"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(
            (
              { image, text, heading, path, sessions, period, price, tagline },
              index
            ) => (
              <ServiceCard
                image={image}
                text={text}
                heading={heading}
                path={path}
                key={index}
                sessions={sessions}
                period={period}
                price={price}
                tagline={tagline}
              />
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["2px", null, null, null, "20px", null, "20px"],
    pb: ["10px", null, null, null, "60px", null, "60px"],
    mt: [null, null, null, null, "180px", null, "180px"],
    backgroundColor: "#f7cad0",
    // background: `url(${coursebg})`,

    // border: "1px solid red",
    position: "relative",
    // ".wave:before": {
    // },
  },
  grid: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gridGap: "30px",
    gridTemplateColumns: [
      "1fr",
      "1fr",
      "1fr",
      "1fr 1fr",
      "1fr 1fr 1fr",
      "1fr 1fr 1fr 1fr",
    ],
  },
};
