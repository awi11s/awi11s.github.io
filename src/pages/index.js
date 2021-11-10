// necessary libraries / photos / svg graphics

import React from "react"
import TextChange from "../components/graphics/TextChange"
import { FaInstagram, FaTwitter, FaSpotify, FaGithub } from "react-icons/fa"

import SelfGraphic from "../components/graphics/SelfGraphic"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Photos from "../components/Photos"
import { Button } from "../styles/components"

const IndexPage = () => (
  <>
    <Seo title="home" />
    <div style={{ display: "flex", paddingTop: "16%", paddingLeft: "10%" }}>
      {/** unordered list for social icons */}
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ padding: "1.5rem", margin: "0" }}>
          <a
            href="https://twitter.com/a_wills15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <FaTwitter className="icon" />
          </a>
        </li>
        <li style={{ padding: "1.5rem", margin: "0" }}>
          <a
            href="https://www.instagram.com/austinwills11/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ig"
          >
            <FaInstagram className="icon" />
          </a>
        </li>
        <li style={{ padding: "1.5rem", margin: "0" }}>
          <a
            href="https://open.spotify.com/user/v7ui3sy1312l9z1vsoz77f1fs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="spotify"
          >
            <FaSpotify className="icon" />
          </a>
        </li>
        <li style={{ padding: "1.5rem", margin: "0" }}>
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
      <Photos />
    </Layout>
  </>
)

export default IndexPage
