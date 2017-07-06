import React from "react";
import {Router, Route, Link, IndexLink, hashHistory, IndexRoute} from "react-router";
import Template from "./template.jsx";
import Hello from "./hello.jsx";
import Bitcoin from "./bitcoin.jsx";
import OtherCoins from "./other.jsx";
import "../../sass/style.scss"

class Main extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Template}>
                    <IndexRoute component={Hello} />
                    <Route path="/bitcoin" component={Bitcoin} />
                    <Route path="/other" component={OtherCoins} />
                </Route>
            </Router>
        )
    }
}

export default Main;
