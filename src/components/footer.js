import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <div className="links">
      <Link to="/imprint">Imprint</Link>{" "}
      <Link to="/privacy-policy">Privacy Policy</Link>
    </div>
    <div className="copyright">
      © {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
