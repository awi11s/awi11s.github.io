import React from "react";
// import { useHistory } from 'react-router-dom';
import { Link } from "gatsby"
import styled from "styled-components";
import { Button } from "../components/Button";
import TextChange from '../components/TextChange';
import HeaderLogo from '../components/HeaderLogo';
import { FaInstagram, FaTwitter, FaSpotify, FaTerminal, FaPenFancy } from 'react-icons/fa';

import kanye from '../images/kanye1.jpg';
import daniel from '../images/daniel1.jpg';
import robot from '../images/mrrobot1.jpg';
import luther from '../images/luther1.jpg';
import SelfGraphic  from '../components/SelfGraphic';

import Layout from "../components/layout"
import Seo from "../components/seo"

const Image = styled.img({
  maxWidth: '80%',
  borderRadius: '20px'
})

const IndexPage = () => (
 <>
 <div style={{ display: 'flex', paddingTop: '10%', paddingLeft: '10%' }}>
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
 
    {/* <HeaderLogo />
    <p> - formerly: intern in analytics for <a href="http://nashvillesc.com" target="_blank" rel="noopener noreferrer">nashvillesc.com</a>.
    </p>
    <p> - 2021 graduate of <a href="http://trevecca.edu" target="_blank" rel="noopener noreferrer">trevecca.edu</a>.</p>
    <p> - currently working on data in the healthcare world.</p>
    <p> - experience: Python, R, SQL, React, React Native, Java, and Solidity.</p>
    <p> - click the writing tab below to check out my new substack.</p>
    <div style={{ display: 'flex' }}>
      <p> - probably listening to: </p><TextChange />
    </div>
    <div style={{ justifyContent: 'center', display: 'flex' }}>

      <div style={{ justifyContent: 'center', padding: '1rem' }}>
        <a 
        href="https://twitter.com/a_wills15" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label='twitter'><FaTwitter style={{ color: 'black', fontSize: '1.8rem' }}/></a>
      </div>

      <div style={{ justifyContent: 'center', padding: '1rem'  }}>
        <a 
        href="https://www.instagram.com/austinwills11/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label='ig'><FaInstagram style={{ color: 'black', fontSize: '1.8rem' }}/></a>
      </div>

      <div style={{ justifyContent: 'center', padding: '1rem'  }}>
        <a 
        href="https://open.spotify.com/user/v7ui3sy1312l9z1vsoz77f1fs" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label='spotify'><FaSpotify style={{ color: 'black', fontSize: '1.8rem' }}/></a>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Button as={Link} href="/work/">my work</Button>
      <Button as={Link} href="/writing/">writing</Button>
    </div> */}
    <div style={{ textAlign: 'left', paddingTop: '2rem' }}>
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
