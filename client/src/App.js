import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Hero />
                <Cards />
                <Footer />
            </div>
        </Router>
    );
}

export default App;