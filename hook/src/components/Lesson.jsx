import React, { useEffect, useState } from "react";

export default function Lesson() {
    const [count, setCount] = useState(50);
    // let timerId;

    // const handleStart = () => {
    //     timerId = setInterval(() => setCount(count - 1), 1000);
    //     console.log("Start ", timerId);
    // };
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount((prev) => prev - 1);
            console.log("countdown.");
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    // const handleStop = () => {
    //     clearInterval(timerId);
    //     console.log("Stop", timerId);
    // };

    return (
        <div>
            <h1>{count}</h1>
            {/* <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button> */}
        </div>
    );
}
