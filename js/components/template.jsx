import React from "react";
import {IndexLink} from "react-router";

class Template extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="row">
                        <div className="logo"></div>
                        <ul>
                            <li>
                                <IndexLink to="/">Start</IndexLink>
                            </li>
                            <li>
                                <IndexLink to="/bitcoin">Bitcoin Price</IndexLink>
                            </li>
                            <li>
                                <IndexLink to="/other">Other Coins</IndexLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {this.props.children}
                <footer>
                    <p>CL 2017 &copy;</p>
                </footer>
            </div>
        )
    }
}

export default Template;
