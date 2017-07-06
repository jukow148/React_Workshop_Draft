import React from "react";
import API from "./api.jsx";

class Bitcoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btc: false
        }
    }
    componentDidMount() {
        API.getBitcoinData("usd").then(data => {
            this.setState({
                btc: data.ticker.price
            })
        });
    }
    render() {
        if (this.state.btc) {
            return <p className="big">{this.state.btc + " $"}</p>
        } else {
            return null;
        }
    }
}

export default Bitcoin;
