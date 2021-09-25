import Loading from "../components/loading";
import SpotifyFollow from "../components/music/spotifyFollow";
import SongCard from "../components/music/songCard";

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
        "-50px",
        "0px",
        "50px"
    ]

    return (
        <div class="music">
            <Loading/>
            {/* <SongCard text={caliText} offsets={caliOffsets}/> */}
            <SpotifyFollow />
        </div>
    )
}

export default Music;