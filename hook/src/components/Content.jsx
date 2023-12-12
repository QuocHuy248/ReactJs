import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }
    //
    componentDidMount() {
        console.log("Content Component Did mount");
    }
    componentDidUpdate() {
        console.log(`Content component update ${this.state.number} time`);
    }

    //thực hiện unmount trước
    componentWillUnmount() {
        console.log("Content Component will unmount");
    }
    handleIncrement = () => {
        this.setState({ ...this.state, number: this.state.number + 1 });
    };
    render() {
        return (
            <>
                <h1>Content- {this.state.number}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </>
        );
    }
}
export default Content;
