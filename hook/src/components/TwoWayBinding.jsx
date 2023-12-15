import React, { useState } from "react";

export default function TwoWayBinding() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(email);
    console.log(password);
    const handleClickLogin = () => {
        console.log({
            email: email,
            password: password,
        });
    };
    return (
        <div className="container">
            <h1>Login Form</h1>
            <form>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        onInput={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onInput={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group pt-2">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={handleClickLogin}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
