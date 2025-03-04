import React from "react";
import NextHead from "next/head";

/* This is the html <header> element which you'll need
your site to have to comply with web standards.
This is NOT a visual header */

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="description" content={description || ""} />
    <meta name="viewport" content="width=device-width, inititial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Alegreya&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
      rel="stylesheet"
    ></link>
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
