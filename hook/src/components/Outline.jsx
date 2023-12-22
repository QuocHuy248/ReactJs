import React, { useState } from "react";
import Content from "./Content";

export default function Outline() {
    const [status, setStatus] = useState(false);
    const handleShowContent = () => {
        setStatus(!status);
    };
    console.log(status);
    return (
        <div>
            <div>
                <button onClick={handleShowContent}>Click</button>
            </div>
            <div>{status && <Content />}</div>
        </div>
    );
}
