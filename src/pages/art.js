import sun from "../images/art/sun.jpg";
import moon from "../images/art/moon.jpg";
import bee from "../images/art/bee.jpg";
import ig from "../images/art/ig.png";
import { Link } from "react-router-dom";

const Art = (props) => {

    return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5em'}}>
            <Link to="/ig" target={"_blank"} rel="noopener noreferrer" style={{height: '10%', position: 'absolute', top: '1em'}}>
                <img src={ig} style={{height: '60%'}}/>
            </Link>
            <img src={sun} style={{height: '50%', marginTop: '8em'}}/>
            <img src={moon} style={{height: '50%'}}/>
            <img src={bee} style={{height: '50%', marginBottom: '18em', marginLeft: '-8em'}}/>
        </div>
    )
}

export default Art;