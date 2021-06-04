import * as React from "react"
import SubPost from "../components/SubPost"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h1>writing...</h1>
    <SubPost title="#1: no need to overcomplicate" link="https://byaustin.substack.com/p/1-no-need-to-overcomplicate">
    sometimes the struggles of life draw us away from our purpose, which may be more simple than what we think.
    </SubPost>
    <SubPost title="the world(s) as we know it" link="https://byaustin.substack.com/p/the-worlds-as-we-know-it">
    #2: the first piece of hopefully many where I discuss the realities we shape outside of our immediate physical world, through our digital devices.
    </SubPost>
  </Layout>
)

export default SecondPage
