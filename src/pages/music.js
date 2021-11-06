import Loading from "../components/loading";
import SpotifyFollow from "../components/music/spotifyFollow";
import SongCard from "../components/music/songCard";
import CALI_art from "../images/music/CALI_art.png";
import CALI_title from "../images/music/CALI_title.png";
import OMW_art from "../images/music/OMW_art.png";
import OMW_title from "../images/music/OMW_title.png";


const Music = (props) => {
    const musicText = [
        "I release the music I make as stphn (real creative artist name, I know) and you can find me on all streaming platforms. I've been producing since 2010, and I recently started singing over my own production.",
        "Ableton is my DAW of choice, but like most people starting out I used FL studio for my first 5 or 6 years of producing. I play piano and drums, and I dabble with guitar (but most of the songs I've put out are built around loops - shhh 🤫).",
        "Check out some of my songs below!"
    ]

    const caliText = [
        "CALI came together when my friend Pira sent me the guitar + trumpet loop. The first draft of the hook and the beat came together in less than an hour.",
        "My favorite part of this song is the pre chorus, where I chopped up and layered different parts from the hook. It creates this section where no pattern repeats twice, sounding unique despite being constructed from parts the listener has heard before.",
        "Please don’t explain the lyrics to my mom."
    ]

    const caliOffsets = [
        "50px",
        "10px",
        "80px"
    ]

    const omwText = [
        "The guitar is a splice loop lol. Don’t hate me.",
        "The chorus is heavily inspired by an unreleased song by Aries - ETA (come to think of it, so is the name). As usual, I freestyled the hook and figured out verses to fit in between.",
        "A good chunk of both verses was inspired by a yearning for fame as well as disdain for the business / marketing side of being an artist. I just wanna write songs stop asking me to make tik toks."
    ]

    return (
        <div class="music">
            {/* <Loading/> */}
            <SongCard order={1}text={caliText} offsets={caliOffsets} art={CALI_art} title={CALI_title}/>
            <SongCard order={2} text={omwText} offsets={caliOffsets} art={OMW_art} title={OMW_title}/>
            {/* <SpotifyFollow /> */}
        </div>
    )
}

export default Music;