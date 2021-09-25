import OffsetText from "../shared/offsetText";

const SongCard = (props) => {
    function text() {
        return (
            <div class="songCard-text">
                <OffsetText text={props.text} offsets={props.offsets} />
            </div>
        )
    }

    function artwork () {
        return (
            <div>

            </div>
        )
    }
    return (
        <div class="songCard">
            {text()}
            {artwork()}
        </div>
    );
}

export default SongCard;