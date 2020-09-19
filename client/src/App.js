import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Desk from "./components/Desk";
import Laptop from "./components/Laptop";
import Mouse from "./components/Mouse";
import Keyboard from "./components/Keyboard";
import Hero from "./pages/Hero";
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
                <div>
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
                    <Route exact path="/" component={Hero}/>
                </div>
            </Router>
        );
    }
}

export default App;