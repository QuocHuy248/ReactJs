import React from "react";

function TopContent({ count }) {
    console.log("Re-render");
    return <div>Xin chao {count}</div>;
}
export default React.memo(TopContent);
