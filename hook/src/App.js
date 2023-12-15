import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState";
import TwoWayBinding from "./components/TwoWayBinding";
import { useState } from "react";
import TwoWayBindingForm from "./components/TwoWayBindingFormSubmit";
import TwoWayBindingForm3 from "./components/TwoWayBindingFormSubmit3";

function App() {
    return (
        <div className="container">
            <TwoWayBindingForm3 />
        </div>
    );
}

export default App;
