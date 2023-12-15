import React from "react";

export default function ShowError(props) {
    const { showAlert, setShowAlert } = props;

    return (
        <>
            {showAlert && (
                <div
                    className="alert alert-success d-flex justify-content-between align-item-center"
                    role="alert"
                >
                    Login Success
                    <span
                        role="button"
                        className="text-dark fs-5 fw-bolder"
                        onClick={() => setShowAlert(false)}
                    >
                        &times;
                    </span>
                </div>
            )}
        </>
    );
}
