import React, { Children } from "react";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";

export default function DefautLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
