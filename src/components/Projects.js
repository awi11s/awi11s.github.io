import React from 'react'

import scripsrc from '../images/scripsrc-img.png'
import mooseMusic from '../images/MOOSE-MUSIC.png'
import spotifyImg from '../images/SPOTIFY-APP.png'

const BUTTON_STYLE = {
    border: 'none',
    margin: '1em',
    borderRadius: '2em',
    padding: '1em',
    filter: 'drop-shadow(0px 5px 5px #4a6373)',
    backgroundColor: '#f598b7',
    color: 'white'
}

export const Projects = ({ isDarkMode }) => {
    return (
        <div style={{ 'textAlign': 'center', 'padding': '2em' }}>
            <a href="https://byaustin.substack.com/">
                <button style={BUTTON_STYLE}>substack</button>
            </a>
            <div>
                <a href="https://scripturesrc.app"><img style={{ 'maxWidth': '40%'}} src={scripsrc} alt="scroll" /></a>
                <div>
                    <h2 style={isDarkMode ? {color: "white"} : {color: "black"}}>scripture src</h2>
                    <p style={isDarkMode ? {color: "white"} : {color: "black"}}>
                        an application that allows users to add annotations to bible verses from a historical or archeological perspective.
                    </p>
                </div>
            </div>
            <div>
                <a href="https://loving-liskov-8fc737.netlify.app"><img style={{ 'maxWidth': '40%'}} src={mooseMusic} alt="guitar" /></a>
                <div>
                    <h2 style={isDarkMode ? {color: "white"} : {color: "black"}}>michael miller music</h2>
                    <p style={isDarkMode ? {color: "white"} : {color: "black"}}>
                        a 3d website to discover new music by country artist Michael Miller.
                    </p>
                </div>
            </div>
            <div>
                <a href="https://github.com/awi11s/spotify-recent"><img style={{ 'maxWidth': '40%'}} src={spotifyImg} alt="spotify" /></a>
                <div>
                    <h2 style={isDarkMode ? {color: "white"} : {color: "black"}}>spotify most recent</h2>
                    <p style={isDarkMode ? {color: "white"} : {color: "black"}}>
                        A website that allows a user to login through Spotify, and see their top 10 most listened to artists or tracks from the past month. (still in development)
                    </p>
                </div>
            </div>
        </div>
    )
}
