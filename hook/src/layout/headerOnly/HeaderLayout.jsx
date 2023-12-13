import React from "react";
import Header from "../defaultLayout/header/Header";

export default function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
