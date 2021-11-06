import './App.css';
import Me from "./pages/me";
import { HashRouter, Route } from "react-router-dom";
import Music from './pages/music';

function App() {
  return (
      <HashRouter basename='/'>
        <Route exact path="/" component={Me}/>
        <Route path='/music' component={() => { 
          window.location.href = 'https://open.spotify.com/artist/45ZahRHfLVk21frmSFtiqj?si=CCcGLuA_QYyKuoM-1W14ow'; 
          return null;
        }}/>
      </HashRouter>
  );
}

export default App;
