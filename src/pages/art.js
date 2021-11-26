import sun from "../images/art/sun.jpg";
import moon from "../images/art/moon.jpg";
import bee from "../images/art/bee.jpg";
import ig from "../images/art/ig.png";
import { Link } from "react-router-dom";

const Art = (props) => {

    return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5em'}}>
            <Link to="/ig" target={"_blank"} rel="noopener noreferrer" style={{height: '10%', position: 'absolute', top: '1em'}}>
                <img src={ig} style={{width: '2vw'}}/>
            </Link>
            <img src={sun} style={{width: '25vw', marginTop: '8em'}}/>
            <img src={moon} style={{width: '25vw'}}/>
            <img src={bee} style={{width: '25vw', marginBottom: '20em'}}/>
        </div>
    )
}

export default Art;