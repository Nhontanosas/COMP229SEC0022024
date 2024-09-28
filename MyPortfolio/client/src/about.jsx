import React from 'react';

const About = () => {
    return (
        <div className="about-container"> 
           <div className='left'>
           <h1>About Me</h1>
            <img src="/img/portfolioImg.jpg" alt="Me" className="welcome" width={'450'} />
            <h2><a href='/img/myResume.pdf'>Click to view My Resume</a></h2>
           
           </div>
            
            <div className='side'> 
                <h2>Neil Tyrone Hontanosas</h2>
                <p>My name is Neil, I was born in the Philippines and grew in Canada. ,I am currrently a student at the Centennial College at the progress campus. I am studying in the field of Software Engineering, it is a 3 year course.</p>
                <p>I have been working as a Thai Chef with the experience of 10 years. I have worked with many teams and I am an incredible team player</p>
                <p>During my free time I like to do many things as hobbies, here are some of the hobbies I enjoy doing:
                    <ul>
                        <li>Cooking</li>
                        <li>Sports: BasketBall, Soccer, Boxing, Swimming ect...</li>
                        <li>Hanging out with Family & Friends</li> 
                        <li>Learning new things</li>                   
                    </ul>
                </p>
            </div>
            <div>
                <link></link>
            </div>
        </div>
    );
};

export default About;
