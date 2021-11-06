import OffsetText from "../shared/offsetText";

const SongCard = (props) => {
    function text() {
        return (
            <div class="songCard-text">
                <img src={props.title ? props.title : null}/>
                <OffsetText text={props.text} offsets={props.offsets} />
            </div>
        )
    }

    function artwork () {
        return (
            <div class="songCard-image">
                <img src={props.art ? props.art : null}/>
            </div>
        )
    }
    return (
        <div class="songCard" style={props.style}>
            {props.order === 1 && 
            <>                
                {text()}
                {artwork()}
            </>
            }
            {props.order === 2 && 
            <>                
                {artwork()}
                {text()}
            </>
            }

        </div>
    );
}

export default SongCard;