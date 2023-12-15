import React, { useState } from "react";
import ShowSuccess from "./ShowSuccess";
import ShowError from "./ShowError";

export default function TwoWayBindingForm3() {
    const [state, setState] = useState({
        email: "",
        password: "",
        isSuccess: false,
        showAlert: false,
    });
    const { email, password, isSuccess, showAlert } = state;

    console.log(email);
    console.log(password);
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // console.log({
        //     email: email,
        //     password: password,
        // });

        if (email === "quochuy24813939@gmail.com" && password === "12345678") {
            setState({
                ...state,
                isSuccess: true,
            });
        } else {
            setState({
                ...state,
                isSuccess: false,
            });
        }
        showAlert(true);
    };
    const handleGetAccount = () => {
        setState({
            ...state,
            email: "quochuy248@gmail.com",
            password: " 123467",
        });
    };
    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmitLogin}>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        onInput={(e) => {
                            setState({
                                ...state,
                                email: "quochuy248",
                            });
                        }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        value={password}
                        className="form-control"
                        onInput={(e) => {
                            setState({
                                ...state,
                                password: "quochuy248",
                            });
                        }}
                        required
                    />
                </div>
                <div className="form-group pt-2">
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                    <button type="button" className="btn btn-success" onClick={handleGetAccount}>
                        Get account
                    </button>
                </div>
            </form>
        </div>
    );
}
