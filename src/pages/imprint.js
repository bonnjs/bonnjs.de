import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Imprint = () => (
  <Layout>
    <SEO title="Imprint" />
    <h2>Imprint</h2>
    <p>
      <address>
        kitconcept GmbH <br />
        Vorgebirgsstraße 80 <br />
        53119 Bonn
      </address>
    </p>

    <p>
      www.kitconcept.com <br />
      info@kitconcept.com
    </p>

    <p>
      Sitz der Gesellschaft: Bonn <br />
      Registergericht der Gesellschaft: Amtsgericht Bonn <br />
      Handelsregister Nummer: HRB 22064 <br />
      USt-IdNr.: DE305158391 <br />
      Geschäftsführer: Timo Stollenwerk
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Imprint
