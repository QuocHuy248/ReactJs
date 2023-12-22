import React, { useState } from "react";
import Lesson from "./Lesson";

export default function Content() {
    const [status, setStatus] = useState(false);
    const handleShow = () => {
        setStatus(!status);
    };
    return (
        <div>
            <button onClick={handleShow}>Click!</button>
            <div>{status && <Lesson />}</div>
        </div>
    );
}
