import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieApp from "./MovieApp"
import Home from "../src/components/Home/Home";
import Trailer from '../src/components/Trailer/Trailer';


function App() {
  return (
    <Switch>
      <div className="App">
        
        <Route exact path="/" component={Home} />
        <Route exact path="/src/MovieApp.js" component={MovieApp} />
        <Route exact path="/Trailer/:id" component={Trailer} />
      </div>
    </Switch>
  );
}
export default App;