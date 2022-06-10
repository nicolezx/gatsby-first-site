// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Nic's Home!">
      <p>This page created following Gatsby tutorial!</p>
      <StaticImage
        alt="Tulip reflections at Table Cape"
        src="../images/hot-air-tulips.jpeg"
      ></StaticImage>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
