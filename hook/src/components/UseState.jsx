import React, { useState } from "react";

// const [state, setState] = useState(initState);
//  Nhiệm vụ của useState" quản lý trạng thái trong component
// input : initState là tất cả các kiểu dữ liệu có trong js
// - number, string ,boolean, null, undefined
// array, object, callback
// output : trả về mảng, mảng này có 2 giá trị.
// giá trị thứ nhất cùng kiểu dữ liệu mà initState trả về
// giá trị thứ hai là một hàm và hàm này có nhiệm vụ cập nhật value cho giá trị thứ nhất

export default function UseState() {
    const [number, setNumber] = useState(100);
    const handleIncrement = () => {
        setNumber(number + 1);
    };
    const handleDecrement = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}
