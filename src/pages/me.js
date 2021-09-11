import OffsetText from "../components/offsetText";
import RESUME from '../RESUME.pdf';
import resume from '../images/resume.png';
import resume_hover from '../images/resume_hover.png';
import { useState } from "react";

const Me = (props) => {

    const [hover, setHover] = useState(false);

    const aboutMe = [
        "I'm a Mechatronics Engineering student at the University of Waterloo. I'm a software engineer and musician who loves combining the two to create tools that enhance the music making process for musicians like myself.",
        "In the past I've worked as an embedded / firmware engineer, but most recently I've been at Audioworks developing SoundsUnite - a platform for creatives to learn and share their work."
    ]

    return (
        <div class="me">
            <div class="me-hero">
                <div class="me-hero-image slide-in" style={{animationDuration: '0.5s'}}/>
                <div class="me-hero-stars slide-in" style={{animationDuration: '0.8s'}}/>
                <div class="me-hero-text slide-in" style={{animationDuration: '1.5s'}}>
                    <h1>Hi!</h1>
                    <h1>I'm Stephen</h1>
                </div>
            </div>

            <div class="me-about slide-in" style={{animationDuration: '0.5s'}}>
                <h2>About Me</h2>
                <OffsetText text={aboutMe} offsets={['0px','30px']}/>
            </div>

            <div class="slide-in" style={{animationDuration: '0.5s', justifySelf: 'center'}}>
                <a href={RESUME} target='_blank' without rel='noopener noreferrer' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <img style={{maxWidth: '10em'}} src={hover ? resume_hover : resume}></img>
                </a>
            </div>

        </div>
    )
}

export default Me;