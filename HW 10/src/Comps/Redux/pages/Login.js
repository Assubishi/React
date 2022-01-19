import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Button, Alert, Form} from "react-bootstrap";
import {auth} from "../firebase"

export const LoginIds = {
    login: "login",
    password: "password",
    button: "button"
}

export const LoginForm = ({onSubmit, emailChange, handlePassChange, email, password, error}) => {
   /* const {push} = useHistory();
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
    };*/

    return(
        <Form onSubmit={onSubmit}>
            <h1>Login</h1>
            <Form.Group controlId = "formBasicEmail">
                <label>Email addres</label>
                <input  type={email} data-testid = {LoginIds.login} placeholder="Email address" name="email" onChange={emailChange} value={email}/>
            </Form.Group>

            <Form.Group controlId = "formBasicPassword">
                <label>Password</label>
                <input type={password} data-testid = {LoginIds.password} placeholder="Password" name="password" onChange={handlePassChange} value={password}/>
            </Form.Group>

            {error && <Alert>{error.toString()}</Alert>}
            <Button variant = "primary"   data-testid = {LoginIds.button}  type="submit">
                Submit
            </Button>
            <hr />

            <p>
                Do not have an account? <Link  to="/signup">Sign</Link>
            </p>

        
        </Form>
    );
}