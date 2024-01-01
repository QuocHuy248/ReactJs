import React, { useEffect, useRef, useState } from "react";

export default function Lesson() {
    const [count, setCount] = useState(50);
    let timerId = useRef();
    let prevCount = useRef();
    const h1Ref = useRef();
    useEffect(() => {
        prevCount.current = count;
        console.log("count In useEffect", count);
    }, [count]);
    useEffect(() => {
        console.log(h1Ref.current.getBoundingClientRect());
    });
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount((prev) => prev - 1);
            console.log("count in call back", count);
        }, 1000);
        // console.log("Start ", timerId.current);
    };
    console.log(count, prevCount.current);

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log("Stop", timerId.current);
    };

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}
