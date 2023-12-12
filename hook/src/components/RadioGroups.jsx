import React from "react";

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ["Football", "Swimming"],
            hobbies: ["Football", "Swimming", "Walk"],
        };
    }
    handleChangeSelected = (e) => {
        let newList = [...this.state.selected];
        if (newList.includes(e.target.value)) {
            newList = newList.filter((item) => item != e.target.value);
            this.setState({
                ...this.state,
                selected: newList,
            });
        } else {
            this.setState({
                ...this.state,
                selected: [...this.state.selected, e.target.value],
            });
        }
        console.log(this.state.selected);
    };
    render() {
        return (
            <>
                <h3>Please Choice Hobbie</h3>
                {this.state.hobbies.map((hobby) => (
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value={hobby}
                                onChange={this.handleChangeSelected}
                                checked={this.state.selected.includes(hobby)}
                            />
                            {hobby}
                        </label>
                    </div>
                ))}
            </>
        );
    }
}
export default RadioGroup;

/// CSR Client Side Rendering
/// SSR Server Side Rendering server render ra và trả lên
// MPA

/// CSR việc render ra trang web giao cho phía client
//  Server trả file js, sau đó trình duyệt render ra page từ file js ở phía client
/// còn SSR thì server đã trả ra mọi thứ và render từ phía server sau đó trả lên trình duyệt
