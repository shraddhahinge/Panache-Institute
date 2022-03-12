import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "What are the payment options available?",
    contents: (
      <div>
        You can use a variety of payment methods, such as
        Visa/Master/Amex/JCB/Discover/Diners Club credit/debit cards, wallets
        such as PayTM, Phone Pe and BHIM and UPI methods such Google Pay, Phone
        Pe, BHIM, PayTM, Amazon Pay, etc.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "How do the course levels work?",
    contents: (
      <div>
        Once you fill the admission enquiry form, you are provided with a
        specific date for one to one interaction with the counselor who will
        access the student and assign the batch accordingly.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Are these courses for adults?",
    contents: (
      <div>
        Yes, there is a specific course to cater the needs of adults. It's under
        the head, "English Vinglish".
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How many students are in a class?",
    contents: (
      <div>
        To ensure that each student has ample time to practice in class and get
        individual attention from the teacher, we keep a maximum of 5 students
        in the class.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What is the course fee for each module?",
    contents: (
      <div>
        It has been already mentioned in the "courses" tab, under respective
        course alongwith the duration.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Will I improve my grammar and vocabulary with these courses?",
    contents: (
      <div>
        Certainly, our courses will help you improve your grammar and vocabulary
        with plenty of interactive exercises for practice and as well as
        guidance and feedback from your teacher.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "How will the course improve my writing skills? Will I get to write essays and get feedback on them?",
    contents: (
      <div>
        The ELOQUENT WRITERS & SPEAKERS course will help you improve both of the
        language skills, i.e., speaking, and writing. During the course, you
        will have the opportunity to submit your writing assignments to your
        teacher and receive feedback on the same.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "Will these courses help me with specific skills like public speaking, personality development etc?",
    contents: (
      <div>
        Through our English courses, you will improve your overall communication
        skills and build your accuracy and fluency to converse in English. You
        will be able to apply this to a variety of situations and present your
        ideas more confidently and clearly.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "Do we have live classes, or do we get recordings of classes in these courses?",
    contents: (
      <div>
        You will get to attend live online classes in the course. We use Google
        Meet to deliver our live online classes which allows you to interact
        with your teacher and classmates. The experience is like being in any
        physical class, there is a lot of interaction and opportunities to
        practice and work together. Even the assessments are taken in a fun
        manner.
      </div>
    ),
  },
  // ---
  {
    isExpanded: false,
    title: "How do I enroll in a course?",
    contents: (
      <div>
        Just click on the tab, "ENROL NOW". You will be directed towards a
        google form. Fill in your details and select your course, we will get
        back to you within 24 hrs.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What are the learning materials that come with the course?",
    contents: (
      <div>
        Each course has comprehensive and interactive online study activities.
        You can pen down pointers during class and we also provide you with the
        notes at the end of each session.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "If I miss a class, will I get a recording of it?",
    contents: (
      <div>
        To ensure the privacy of our students, we do not record classes. Details
        about the topics covered are provided and your teacher will be happy to
        answer any questions you might have.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "Will I get a certificate after I complete the course? Will it be physical or e-certificate?",
    contents: (
      <div>
        Yes, you will receive an e-certificate if you successfully complete the
        course.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Can more than one person access a single course login at a time?",
    contents: (
      <div>
        No, the course access or login is meant only for the learner who has
        signed up for the course.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What kind of experience and qualifications do your teachers have? ",
    contents: (
      <div>
        Our teaching team comprises a diverse and varied group of English
        speakers, who have the knowledge, skills and experience to develop the
        language communication skills and learning strategies of our learners.
        All PANACHE teachers and trainers are fully proficient in English. They
        don't teach because it's their job, rather because they are passionate
        about teaching. We have been helping students for more than a decade.
        Our teachers keep themselves updated on employing the latest teaching
        methodologies, techniques and technologies for teaching modern,
        real-life English.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Who can I talk to for more information on the course?",
    contents: (
      <div>
        For course-related queries, please fill in the enrollment form. We'll
        get back to you within 24 hrs.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" sx={styles.faq}>
      <Container>
        <BlockTitle title="Frequently Asked Questions" />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="#">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  faq: {
    mt: 50,
  },
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
