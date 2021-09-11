import './App.css';
import Me from "./pages/me";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path="/" component={Me}/>
    </HashRouter>
  );
}

export default App;
