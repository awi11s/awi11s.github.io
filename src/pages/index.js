import * as React from "react"
// import { useHistory } from 'react-router-dom';
import { Link } from "gatsby"
import styled from "styled-components";
import { Button } from "../components/Button";
import TextChange from '../components/TextChange';

import kanye from '../images/kanye1.jpg';
import daniel from '../images/daniel1.jpg';
import robot from '../images/mrrobot1.jpg';
import luther from '../images/luther1.jpg';

import Layout from "../components/layout"
import Seo from "../components/seo"

const Image = styled.img({
  maxWidth: '80%',
  borderRadius: '20px'
})

const IndexPage = () => (
 
  
  <Layout>
    <Seo title="home" />
    <h1>austin wills: </h1>
    <p> - currently working on data engineering and analytics as an intern with <a href="http://nashvillesc.com" target="_blank" rel="noopener noreferrer">nashvillesc.com</a>.
    </p>
    <p> - also a 2021 graduate of <a href="http://trevecca.edu" target="_blank" rel="noopener noreferrer">trevecca.edu</a>.</p>
    <p> - looking for employment in data or software...</p>
    <p> - experience: Python, R, SQL, React, React Native, Java, and Solidity.</p>
    <p> - other: hoping to start a substack soon where i write about various interests.</p>
    <div style={{ display: 'flex' }}>
      <p> - probably listening to: </p><TextChange />
    </div>
    <div style={{ textAlign: 'center' }}>
      <Button as={Link} href="/work/">my work</Button>
      <Button as={Link} href="/writing/">writing</Button>
    </div>
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
)

export default IndexPage
