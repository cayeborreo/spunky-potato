"use strict";

module.exports = {
  url: "https://cayeborreo.com",
  pathPrefix: "/",
  title: "<rph />",
  subtitle: "The Pharmacist Who Codes",
  copyright: `© ${new Date().getFullYear()} · Caye Borreo · All rights reserved`,
  disqusShortname: "cayeborreo",
  postsPerPage: 4,
  googleAnalyticsId: "UA-144194562-1",
  menu: [
    {
      label: "All posts",
      path: "/"
    },
    {
      label: "About me",
      path: "/pages/about"
    }
  ],
  author: {
    name: "Caye",
    photo: "/author.jpg",
    bio:
      "Hi, I’m Caye. I’m a pharmacist passionate about improving health care through tech.",
    contacts: {
      email: "mcborreo@gmail.com",
      twitter: "mcborreo",
      github: "cayeborreo"
    }
  }
};
