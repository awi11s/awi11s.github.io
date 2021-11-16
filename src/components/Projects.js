import React from 'react'
import scripsrc from '../images/scripsrc-img.png'


export const Projects = () => {
    return (
        <div style={{ 'textAlign': 'center', 'padding': '2em' }}>
            <div>
            <a href="https://scripturesrc.app"><img style={{ 'maxWidth': '40%'}} src={scripsrc} alt="scripsrc" /></a>
            <div>
                <h2>scripture src</h2>
                <p>an application that allows users to add annotations to bible verses from a historical or archeological perspective.</p>
            </div>
            </div>
        </div>
    )
}
