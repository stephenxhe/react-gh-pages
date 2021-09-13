import './App.css';
import Me from "./pages/me";
import { HashRouter, Route } from "react-router-dom";
import Music from './pages/music';

function App() {
  return (
      <HashRouter basename='/'>
        <Route exact path="/" component={Me}/>
        <Route exact path="/music" component={Music}/>
      </HashRouter>
  );
}

export default App;
