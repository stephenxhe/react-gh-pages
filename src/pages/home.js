import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = (props) => {

    const [animate, setAnimate] = useState(true);

    // useEffect(() => {
    //     if (window.sessionStorage.getItem("homeLoadDone") === null) {
    //         setAnimate(true);
    //         window.sessionStorage.setItem("homeLoadDone", 1);
    //     } else {
    //         setAnimate(false);
    //     }
    // }, []);

    return (
        <div class="header">
            <div class="menu-buttons fade-in" style={{animationDuration: '1.5s'}}>
                <a>work</a>
                <a>music</a>
                <Link to="/me">me</Link>
                <a>contact</a>
            </div>
        </div>
    )
}

export default Home;