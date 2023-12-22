import React, { useState } from "react";
import TopContent from "./TopContent";

export default function Content() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div>
                <button onClick={handleCount}>Count</button>
            </div>
            <TopContent count={count} />
            <div>
                <h1>{count}</h1>
            </div>
        </div>
    );
}
