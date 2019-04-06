import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <Link to="/imprint">Imprint</Link>{" "}
    <Link to="/privacy-policy">Privacy Policy</Link>
    <br />© {new Date().getFullYear()}, Built with{" "}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
