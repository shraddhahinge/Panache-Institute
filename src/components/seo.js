import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Panache Institute",
  author = "shraddha hinge",
  meta,
  title = "Panache Institute",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: require("assets/panache.png"),
    },
    // {
    //   name: `twitter:card`,
    //   content: `summary`,
    // },
    // {
    //   name: `twitter:creator`,
    //   content: author,
    // },
    // {
    //   name: `twitter:title`,
    //   content: title,
    // },
    // {
    //   name: `twitter:description`,
    //   content: description,
    // },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content, property }, i) => (
        <meta key={i} name={name} property={property} content={content} />
      ))}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="shortcut icon" href={require("assets/panache.png")} />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
