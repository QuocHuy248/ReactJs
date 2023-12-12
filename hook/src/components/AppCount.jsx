import React from "react";
import Content from "./Content";

class AppCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            showContent: false,
        };
    }
    handleIncrement = () => {
        this.setState({ ...this.state, number: this.state.number + 1 });
    };
    handleDecrement = () => {
        this.setState({ ...this.state, number: this.state.number - 1 });
    };
    handleToggleContent = () => {
        this.setState({ ...this.state, showContent: !this.state.showContent });
    };
    render() {
        return (
            <>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <br />
                <button onClick={this.handleToggleContent}>Toggle Content Component</button>
                {this.state.showContent && <Content />}
            </>
        );
    }
}
export default AppCount;
