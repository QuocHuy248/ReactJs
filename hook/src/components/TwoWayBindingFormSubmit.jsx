import React, { useState } from "react";
import ShowSuccess from "./ShowSuccess";
import ShowError from "./ShowError";

export default function TwoWayBindingForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSuccess, setIsSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    console.log(email);
    console.log(password);
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // console.log({
        //     email: email,
        //     password: password,
        // });

        if (email === "quochuy24813939@gmail.com" && password === "12345678") {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
        }
        showAlert(true);
    };
    const handleGetAccount = () => {
        setEmail("quochuy24813939@gmail.com");
        setPassword("12345678");
    };
    return (
        <div className="container">
            <h1>Login Form</h1>

            {(isSuccess && <ShowSuccess showAlert={showAlert} setShowAlert={setShowAlert} />) ||
                (!isSuccess && <ShowError showAlert={showAlert} setShowAlert={setShowAlert} />)}
            <form onSubmit={handleSubmitLogin}>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        onInput={(e) => {
                            setEmail(e.target.value);
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
                            setPassword(e.target.value);
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
