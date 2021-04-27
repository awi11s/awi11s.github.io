// If you don't want to use TypeScript you can delete this file!
import * as React from "react";
import { Link } from 'gatsby';
// import { PageProps, Link, graphql } from "gatsby";
import Project from '../components/Project'
import { Button } from '../components/Button';
import Layout from "../components/layout";
import Seo from "../components/seo";


const WorkPage = () => (
  <Layout>
    <Seo title="work portfolio" />
    <Project title='Bible App Clone' link="https://github.com/awi11s/PdNativeApp">
      this is a project i'm currently working on every now and then when i have time. 
      like the title says, it's a clone of the bible app using a react native front-end. 
    </Project>
    <Project title='Ranking System' link="https://github.com/awi11s/h2happ">
      after watching <em>the social network</em> and seeing the elo rating algorithm they used for the facemash app,
      i decided to make a game that would let people  enter variables of any subject (e.g. favorite movies, 
      best nba players) and rank them based on the elo system after a number of head-to-head matchups.
    </Project>
    <Project title='Some NBA Data Viz' link="https://github.com/awi11s/nbacharts">
      some data visualizations i did in R that would show anything from Chris Paul's
      mid-range efficiency to Duncan Robinson's 3FG with one dribble.
    </Project>
    <h3>working on some ethereum smart contracts atm so hopefully that is coming soon.</h3>
    <Button as={Link} href="/">home page</Button>
  </Layout>
)

export default WorkPage

// export const query = graphql`
//   {
//     site {
//       buildTime(formatString: "YYYY-MM-DD hh:mm a z")
//     }
//   }
// `
