import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-Image';
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"
import bonn_sunrise from '../images/bonn-sunrise.jpg'

const HeaderImage = () => (
    <>
        <StaticQuery
        query={graphql`
      query {
        imageBonn: file(relativePath: { eq: "bonn-sunrise.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 900, quality: 100) {
                  ...GatsbyImageSharpFluid
        }
          }
        }
      }
    `}
        render={data => <Img fluid={data.imageBonn.childImageSharp.fluid} className="header-image"/>}
    />
        <Fade bottom className="header-text-container">
        <h1 className="header-text"> Welcome to BonnJS</h1>
        </Fade>
    </>

)

export default HeaderImage