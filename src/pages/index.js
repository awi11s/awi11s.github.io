// necessary libraries / photos / svg graphics

import React from "react"
import { FaInstagram, FaTwitter, FaSpotify, FaGithub } from "react-icons/fa"

import SelfGraphic from "../components/graphics/SelfGraphic"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Projects } from "../components/Projects"

const IndexPage = () => (
  <>
    <Seo title="home" />
    <div style={{ display: "flex", paddingTop: "16%", paddingLeft: "10%" }}>
      {/** unordered list for social icons */}
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ padding: "1em", margin: "0" }}>
          <a
            href="https://twitter.com/a_wills15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <FaTwitter className="icon" />
          </a>
        </li>
        <li style={{ padding: "1em", margin: "0 auto" }}>
          <a
            href="https://www.instagram.com/austinwills__/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ig"
          >
            <FaInstagram className="icon" />
          </a>
        </li>
        <li style={{ padding: "1em", margin: "0 auto" }}>
          <a
            href="https://open.spotify.com/user/v7ui3sy1312l9z1vsoz77f1fs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="spotify"
          >
            <FaSpotify className="icon" />
          </a>
        </li>
        <li style={{ padding: "1em", margin: "0 auto" }}>
          <a
            href="https://github.com/awi11s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <FaGithub className="icon" />
          </a>
        </li>
      </ul>
    </div>

    {/* big svg graphic that is the main part of the page, little description of work and favorite pics below */}

    <SelfGraphic />

    {/* everything below the graphic */}

    <Layout>
      <Projects />
      {/* <Photos /> */}
    </Layout>
  </>
)

export default IndexPage
