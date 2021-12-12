import React from 'react'

import scripsrc from '../images/scripsrc-img.png'



export const Projects = ({ isDarkMode }) => {
    return (
        <div style={{ 'textAlign': 'center', 'padding': '2em' }}>
            <div>
            <a href="https://scripturesrc.app"><img style={{ 'maxWidth': '40%'}} src={scripsrc} alt="scripsrc" /></a>
            <div>
                <h2 style={isDarkMode ? {color: "white"} : {color: "black"}}>scripture src</h2>
                <p style={isDarkMode ? {color: "white"} : {color: "black"}}>an application that allows users to add annotations to bible verses from a historical or archeological perspective.</p>
            </div>
            </div>
            <a href="https://byaustin.substack.com/"><h2>substack</h2></a>
        </div>
    )
}
