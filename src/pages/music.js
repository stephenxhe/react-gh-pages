import Loading from "../components/loading";
import SpotifyFollow from "../components/spotifyFollow";

const Music = (props) => {
    return (
        <div class="music">
            <Loading/>
            <SpotifyFollow />
        </div>
    )
}

export default Music;