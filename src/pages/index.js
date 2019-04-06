import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header_image from "../components/header_image"
import AboutUs from "../components/about-us"
import Events from "../components/events"
import MainContent from "../components/main-content"
import "../components/custom.css"

const IndexPage = () => (
    <>
    <Header_image/>
    <Layout>
      <SEO title="Home" keywords={[`javascript`, `bonn`, `meetup`, `react`]} />
    <MainContent>
      <AboutUs />
      <Events />
    </MainContent>
  </Layout>
    </>
)

export default IndexPage
