import React from "react";
import API from "./api.jsx";

class Input extends React.Component {
    render () {
        return <input value={this.props.currentText} onChange={this.props.getText}/>
    }
}

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.getData}>Sprawdź</button>
        )
    }
}

class OtherCoins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: "",
            currencyName: "",
            currencyValue: null
        }
    }
    getText = (event) => {
        this.setState({
            currentText: event.target.value
        })
    }
    getData = (event) => {
        const text = this.state.currentText;
        API.getCurrencyData(text).then(data => {
            console.log(data);
            this.setState({
                currentText: "",
                currencyName: data.ticker.base,
                currencyValue: data.ticker.price
            })
        })
    }
    render() {
        return (
            <div>
                <Input currentText={this.state.currentText} getText={this.getText} />
                <Button getData={this.getData}/>
            </div>
        )
    }
}

export default OtherCoins;
