import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
// import TextChange from '../components/TextChange';
import { FaInstagram, FaTwitter, FaSpotify, FaTerminal, FaPenFancy } from 'react-icons/fa';

import kanye from '../images/kanye1.jpg';
import daniel from '../images/daniel1.jpg';
import robot from '../images/mrrobot1.jpg';
import luther from '../images/luther1.jpg';
import SelfGraphic  from '../components/SelfGraphic';

import Layout from "../components/layout"
import Seo from "../components/seo"

const Image = styled.img({
  maxWidth: '65%',
  borderRadius: '15px'
})

const IndexPage = () => (
 <>
 <div style={{ display: 'flex', paddingTop: '16%', paddingLeft: '10%' }}>
  <h1>follow me:</h1>
  <ul style={{ display: 'flex', listStyleType: 'none' }}>
    <li style={{ padding: '1.5rem', margin: '0' }}><a 
    href="https://twitter.com/a_wills15" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label='twitter'><FaTwitter className='icon' style={{ color: '#66788c' }}/></a></li>
    <li style={{ padding: '1.5rem', margin: '0' }}><a 
    href="https://www.instagram.com/austinwills11/" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label='ig'><FaInstagram className='icon' style={{ color: '#66788c' }}/></a></li>
    <li style={{ padding: '1.5rem', margin: '0' }}><a 
    href="https://open.spotify.com/user/v7ui3sy1312l9z1vsoz77f1fs" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label='spotify'><FaSpotify className='icon' style={{ color: '#66788c' }}/></a></li>
  </ul>
  </div>
  <div style={{ display: 'flex', paddingLeft: '10%' }}>
    <h1>mi tiempo libre: </h1>
    <ul style={{ display: 'flex', listStyleType: 'none' }}>
    <li style={{ padding: '1.5rem', margin: '0' }}>
      <a href="/work" target="_blank" rel="noopener noreferrer"aria-label='ig'>
        <FaTerminal className='icon' style={{ color: '#66788c' }}/>
      </a>
    </li>
    <li style={{ padding: '1.5rem', margin: '0' }}>
      <a href="/writing" target="_blank" rel="noopener noreferrer" aria-label='ig'>
        <FaPenFancy className='icon' style={{ color: '#66788c' }}/>
      </a>
  </li>
  </ul>
  </div>
  <SelfGraphic />
    <Layout>
      <Seo title="home" />
      <div style={{ textAlign: 'left', paddingTop: '25%' }}>
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
