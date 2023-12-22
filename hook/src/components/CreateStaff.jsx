import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    fullName: yup.string().required("fullName is required"),
    age: yup.number().required("age is required").min(5).max(30).typeError("age is required"),
    gender: yup.string().required("gender is required"),
});

export default function CreateStaff() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleCreateStaff = (data) => {
        console.log(data);
    };

    return (
        <>
            <h1>Create Staff</h1>
            <form action="" onSubmit={handleSubmit(handleCreateStaff)} className="needs-validation">
                <div className="form-group mb-2 has-validation">
                    <label htmlFor="">Full name</label>
                    <input
                        type="text"
                        className={`form-control ${errors?.fullName?.message ? "is-invalid" : ""}`}
                        {...register("fullName")}
                    />
                    <span className="invalid-feedback d-block">{errors?.fullName?.message}</span>
                </div>
                <div className="form-group mb-2 has-validation">
                    <label htmlFor="">Age</label>
                    <input
                        type="text"
                        className={`form-control ${errors?.age?.message ? "is-invalid" : ""}`}
                        {...register("age")}
                    />
                    <span className="invalid-feedback d-block">{errors?.age?.message}</span>
                </div>
                <div className="form-group mb-2 has-validation">
                    <label htmlFor="">Gender</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                                id="male"
                                type="radio"
                                className={`form-check-input ${
                                    errors?.gender?.message ? "is-invalid" : ""
                                }`}
                                value="male"
                                {...register("gender")}
                            />
                            <label htmlFor="male" className="form-check-label">
                                Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                id="female"
                                type="radio"
                                className={`form-check-input ${
                                    errors?.gender?.message ? "is-invalid" : ""
                                }`}
                                value="female"
                                {...register("gender")}
                            />
                            <label htmlFor="female" className="form-check-label">
                                Female
                            </label>
                        </div>
                        <span className="invalid-feedback d-block">{errors?.gender?.message}</span>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor=""></label>
                    <button type="submit" className="btn btn-sm btn-warning">
                        Create
                    </button>
                    <button type="button" className="btn btn-sm btn-dark" onClick={() => reset()}>
                        Clear
                    </button>
                </div>
            </form>
        </>
    );
}
