import React from "react";
import {Alert, Button, Spinner } from "react-bootstrap";


export const Loader = () =>  (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>)


export const Error = ({reload}) => 
   (
        <Alert variant="danger">
           
            Something went wrong!
            <Button onClick={reload}> Reload</Button>
        </Alert>
    );

    


export const Post = ({posts}) => (
    <div>
        {
            posts.map((item)=> (
                <div key={item.id}>
                    <h2>
                        {item.title}
                    </h2>
                    <p>
                        {item.body}
                    </p>
                </div>
            ))
        }
    </div>
);