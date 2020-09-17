import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Cards from "./pages/Cards";
import "./style.css";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/items" component={Cards} />
                <Route exact path="/" component={Hero} />
            </div>
        </Router>
    );
}

export default App;