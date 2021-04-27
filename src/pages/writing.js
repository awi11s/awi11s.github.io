import * as React from "react"
import { Link } from "gatsby"
import { Button } from '../components/Button'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="writing" />
    <h1>new substack otw...</h1>
    <Button as={Link} href="/">back to home</Button>
  </Layout>
)

export default SecondPage
