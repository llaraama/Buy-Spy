import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Desk from "./components/Desk";
import Laptop from "./components/Laptop";
import Mouse from "./components/Mouse";
import Keyboard from "./components/Keyboard";
import Hero from "./pages/Hero";
import Favorites from "./pages/Favorites";
import "./style.css";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/desktop" component={Desk} />
                <Route exact path="/laptop" component={Laptop} />
                <Route exact path="/mouse" component={Mouse} />
                <Route exact path="/keyboard" component={Keyboard} />
                <Route exact path="/my-favorites" component={Favorites} />
                <Route exact path="/" component={Hero} />
            </div>
        </Router>
    );
}

export default App;