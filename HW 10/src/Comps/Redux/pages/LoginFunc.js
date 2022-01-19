import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Button, Alert, Form} from "react-bootstrap";
import {auth} from "../firebase"
import { LoginForm } from "./Login";
export const LoginIds = {
    login: "login",
    password: "password",
    button: "button"
}

export const Login = () => {
    const {push} = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handlePassChange  = (e) => {
        setPassword(e.target.value);
    };

    const emailChange  = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit  = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            push("/profile");
        } catch(e) {
            setError(e);
        }
    };
    return (<LoginForm onSubmit={onSubmit} emailChange ={emailChange} handlePassChange = {handlePassChange} email = {email} password = {password} error= {error}  />)
}