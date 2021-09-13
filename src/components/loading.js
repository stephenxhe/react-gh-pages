import WIP from "../images/WIP.png"

const Loading = (props) => {

    return (
        <div>
            <img src={WIP} class="slide-in" style={{animationDuration: '0.5s'}} alt="loading..."/>
        </div>
    )
}

export default Loading;