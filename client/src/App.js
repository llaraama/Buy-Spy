import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Cards from "./pages/Cards";
import Favorites from "./pages/Favorites";
import "./style.css";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/desktop" component={Cards} />
                <Route exact path="/laptop" component={Cards} />
                <Route exact path="/mouse" component={Cards} />
                <Route exact path="/keyboard" component={Cards} />
                <Route exact path="/accesories" component={Cards} />
                <Route exact path="/my-favorites" component={Favorites} />
                <Route exact path="/" component={Hero} />
            </div>
        </Router>
    );
}

export default App;