import React from 'react';
//Neil H 301373003 project.jsx
export default function Project(){
    return (
        <>
        <h2>My Projects</h2>
        
        <div className="servicepg">
        <h2>Catch Pikachu</h2>
            <img src="/img/pikaGame.jpg" width={500} alt="Catch Pikachu Game" /><br />
            <ul>
                <li>This is a game project created with Javascript. The objective is to catch the moving head by clicking it with the mouse. The more you click, the faster the head moves to a new position.</li>
            </ul>
        <h2>Space Chase</h2>
            <img src="/img/spaceChase.jpg" width={300} alt="Space Chase Game" /><br />
          
            <ul>
                <li>This game is also made with Javascript. Unlike the Catch Pikachu game, you use arrow keys to move the ship and chase the alien.</li>
            </ul>
        <h2>Real Estate Profile</h2>
            <img src="/img/realEstate.jpg" width={450} alt="Real Estate Profile Project" /><br />
            <ul>
                <li>This Real Estate profile was built using HTML and CSS. It features a contact form, a home page, and some active listings of the agent.</li>
            </ul>
        </div>
        </>
    );
}
