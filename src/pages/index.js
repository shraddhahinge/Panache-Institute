import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Jackpot from "sections/jackpot";
import CallToAction from "sections/call-to-action";

import Testimonials from "sections/testimonials";

import FAQ from "sections/faq";
import Subscribe from "sections/subscribe";
import Features from "sections/features";
import Events from "sections/events";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Panache Institute" />
          <Banner />
          <Features />
          <Services />
          <Jackpot />
          <CallToAction />
          <Events />

          <Testimonials />

          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
