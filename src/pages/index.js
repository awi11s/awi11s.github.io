// necessary libraries / photos / svg graphics

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaGithub,
  FaSun,
  FaMoon,
} from "react-icons/fa"

import LightModeGraphic from "../components/graphics/LightModeGraphic"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Projects } from "../components/Projects"
import DarkModeGraphic from "../components/graphics/DarkModeGraphic"

const IconList = styled.ul`
  list-style-type: none;
  display: flex;
`

const IconElement = styled.li`
  margin: 0;
  padding-left: 1.3em;
`

const IndexPage = () => {
  const [isDark, setIsDark] = useState(false)

  function toggleDark() {
    setIsDark(!isDark)
    let bod = document.body
    bod.classList.toggle("dark-mode")
    console.log(isDark)
  }

  return (
    <>
      <Seo title="home" />
      <div style={{ paddingTop: "2em", paddingLeft: "1em" }}>

        {/** unordered list for social icons */}
        <IconList>
          <IconElement>
            <a
              href="https://twitter.com/a_wills15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <FaTwitter className="icon" />
            </a>
          </IconElement>
          <IconElement>
            <a
              href="https://www.instagram.com/austinwills__/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ig"
            >
              <FaInstagram className="icon" />
            </a>
          </IconElement>
          <IconElement>
            <a
              href="https://open.spotify.com/user/v7ui3sy1312l9z1vsoz77f1fs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="spotify"
            >
              <FaSpotify className="icon" />
            </a>
          </IconElement>
          <IconElement>
            <a
              href="https://github.com/awi11s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <FaGithub className="icon" />
            </a>
          </IconElement>
        </IconList> 
      </div>
      <div style={{ textAlign: "center", paddingTop: "1em" }}>
          {isDark ? (
            <FaMoon className="icon-moon" onClick={toggleDark} />
          ) : (
            <FaSun className="icon-sun" onClick={toggleDark} />
          )}
        </div>

      {/* big svg graphic that is the main part of the page, little description of work and favorite pics below */}
      {isDark ? 
        <DarkModeGraphic />
        :
        <LightModeGraphic />
      }
        <Layout>
          <Projects isDarkMode={isDark}/>
        </Layout>
    </>
  )
}

export default IndexPage
