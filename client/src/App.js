import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Desk from "./components/Desk";
import Laptop from "./components/Laptop";
import Mouse from "./components/Mouse";
import Keyboard from "./components/Keyboard";
import Hero from "./pages/Hero";
import Signup from "./pages/Signup";
import Favorites from "./pages/Favorites";
import "./style.css";

class App extends Component {

    state = {
        favorites: 0
    };

    addFavorites = id => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    render () {
        return (
            <Router>
                <div className="wave-container">
                    <Navbar favorites={this.state.favorites}/>
                    <Route
                        path='/desktop'
                        render={() => (
                            <Desk addFavorites={this.addFavorites}/>
                        )}
                    />
                    <Route
                        path='/laptop'
                        render={() => (
                            <Laptop addFavorites={this.addFavorites}/>
                        )}
                    />
                    <Route
                        path='/mouse'
                        render={() => (
                            <Mouse addFavorites={this.addFavorites}/>
                        )}
                    />
                    <Route
                        path='/keyboard'
                        render={() => (
                            <Keyboard addFavorites={this.addFavorites}/>
                        )}
                    />

                    <Route exact path="/my-favorites" component={Favorites}/>
                    
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/" component={Hero}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320" height="360">
                        <path fill="#4B5286" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </Router>
        );
    }
}

export default App;
