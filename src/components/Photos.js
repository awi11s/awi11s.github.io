import React from 'react'
import styled from 'styled-components';

import kanye from '../images/kanye1.jpg';
import daniel from '../images/daniel1.jpg';
import robot from '../images/mrrobot1.jpg';
import luther from '../images/luther1.jpg';


const Image = styled.img({
    maxWidth: '65%',
    borderRadius: '15px'
  })


const Photos = () => {
    return (        
        <div>
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
        </div>
    )
}

export default Photos;