import OffsetText from "../components/shared/offsetText";
import RESUME from '../RESUME.pdf';
import resume from '../images/resume.png';
import resume_hover from '../images/resume_hover.png';
import notes from '../images/notes.png';
import notes_hover from '../images/notes_hover.png';
import check_out_my_music from '../images/check_out_my_music.png'
import { useState } from "react";
import { Link } from "react-router-dom";

const Me = (props) => {

    const [resumeHover, setResumeHover] = useState(false);
    const [notesHover, setNotesHover] = useState(false);

    const aboutMe = [
        "I'm a Mechatronics Engineering student at the University of Waterloo. I make software and music (sometimes) and I love combining the two to create tools that enhance the music making process for musicians like myself.",
        "In the past I've worked as an embedded / firmware engineer, but most recently I've been at Audioworks developing SoundsUnite - a platform for musicians to learn new skills and share their work with other creatives."
    ]

    return (
        <>
            <div class="me" id="about-me">
                <div class="me-hero">
                    <div class="me-hero-image slide-in" style={{animationDuration: '0.5s'}}/>
                    <div class="me-hero-stars slide-in" style={{animationDuration: '0.8s'}}/>
                    <div class="me-hero-text slide-in" style={{animationDuration: '1s'}}>
                        <h1>Hi!</h1>
                        <h1>I'm Stephen</h1>
                    </div>
                    <Link to="/music" target={"_blank"} rel="noopener noreferrer" style={{alignSelf: 'flex-end', marginTop: '50px'}}>
                        <img class="slide-in" src={notesHover ? notes_hover : notes} onMouseEnter={() => setNotesHover(true)} onMouseLeave={() => setNotesHover(false)} 
                            style={{maxWidth: '124px', alignSelf: 'flex-end', marginLeft: '-870px', marginBottom: '200px', animationDuration: '0.7s'}}/>
                    </Link>
                    <img class="slide-in" src={check_out_my_music} style={{maxWidth: '170px', alignSelf: 'flex-end', marginLeft: '-980px', paddingBottom: '300px', animationDuration: '0.5s'}}/>
                </div>

                <div class="me-about slide-in" style={{animationDuration: '0.5s'}}>
                    <h2>About Me</h2>
                    <OffsetText text={aboutMe} offsets={['-20px','30px']}/>
                </div>

                <div class="slide-in" style={{animationDuration: '0.6s', justifySelf: 'center'}}>
                    <a href={RESUME} target='_blank' without rel='noopener noreferrer' onMouseEnter={() => setResumeHover(true)} onMouseLeave={() => setResumeHover(false)}>
                        <img style={{maxWidth: '9em'}} src={resumeHover ? resume_hover : resume}></img>
                    </a>
                </div>
            </div>
        </>

    )
}

export default Me;