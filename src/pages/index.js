// necessary libraries / photos / svg graphics

import React from "react";
import styled from "styled-components";
import TextChange from '../components/TextChange';
import { FaInstagram, FaTwitter, FaSpotify, FaTerminal, FaPenFancy } from 'react-icons/fa';

import kanye from '../images/kanye1.jpg';
import daniel from '../images/daniel1.jpg';
import robot from '../images/mrrobot1.jpg';
import luther from '../images/luther1.jpg';
import SelfGraphic  from '../components/SelfGraphic';

import Layout from "../components/layout"
import Seo from "../components/seo"

// styled component that keeps all images consistent
const Image = styled.img({
  maxWidth: '65%',
  borderRadius: '15px'
})

const IndexPage = () => (
 <>
 <div style={{ display: 'flex', paddingTop: '16%', paddingLeft: '10%' }}>
   {/** unordered list for social icons */}
  <h1>follow me:</h1>
  <ul style={{ display: 'flex', listStyleType: 'none' }}>
    <li style={{ padding: '1.5rem', margin: '0' }}>
      <a 
      href="https://twitter.com/a_wills15" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label='twitter'>
        <FaTwitter className='icon' />
      </a>
      </li>
    <li style={{ padding: '1.5rem', margin: '0' }}>
      <a 
      href="https://www.instagram.com/austinwills11/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label='ig'>
        <FaInstagram className='icon' />
      </a>
      </li>
    <li style={{ padding: '1.5rem', margin: '0' }}>
      <a 
      href="https://open.spotify.com/user/v7ui3sy1312l9z1vsoz77f1fs" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label='spotify'>
        <FaSpotify className='icon' />
      </a>
      </li>
  </ul>
  </div>
  <div style={{ display: 'flex', paddingLeft: '10%' }}>
    {/** list for programming link and substack link */}
    <h1>free time: </h1>
    <ul style={{ display: 'flex', listStyleType: 'none' }}>
    <li style={{ padding: '1.5rem', margin: '0' }}>
      <a href="/work" target="_blank" rel="noopener noreferrer"aria-label='terminal'>
        <FaTerminal className='icon' />
      </a>
    </li>
    <li style={{ padding: '1.5rem', margin: '0' }}>
      <a href="/writing" target="_blank" rel="noopener noreferrer" aria-label='pen'>
        <FaPenFancy className='icon' />
      </a>
  </li>
  </ul>
  </div>
  
  {/* big svg graphic that is the main part of the page, little description of work and favorite pics below */}

  <SelfGraphic />
    <Layout>
      <h2>check out my programming work and writing above. currently working on projects with: </h2>
      <h2 style={{ color: "rebeccapurple"}}> react, web3, solidity, and python.</h2>
      <p>probably listening to: </p><TextChange />
      <Seo title="home" />
      <div style={{ textAlign: 'left', paddingTop: '10%' }}>
          <Image src={kanye} alt='kanye' />
        </div>
        <div style={{ textAlign: 'right', paddingTop: '2rem' }}>
          <Image src={daniel} alt='daniel' />
        </div>
        <div style={{ textAlign: 'left', paddingTop: '2rem' }}>
          <Image src={robot} alt='mr robot' />
        </div>
        <div style={{ textAlign: 'right', paddingTop: '2rem' }}>
          <Image src={luther} alt='luther' />
        </div>
      
    </Layout>
  </>
)

export default IndexPage
