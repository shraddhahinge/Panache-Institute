import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import CourseHeader from "components/header/CourseHeader";
import CoursePage from "sections/course-page";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      {/* <StickyProvider>
        <Layout coursePage noFooter>

        </Layout>
      </StickyProvider> */}
      <CourseHeader />
      <CoursePage />
    </ThemeProvider>
  );
}
