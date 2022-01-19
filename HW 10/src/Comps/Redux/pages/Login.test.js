import React from "react";
import {render, fireEvent, act} from "@testing-library/react";
import "@testing-library/jest-dom";
import {LoginForm, LoginIds, onSubmit} from "./Login";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store/index";
import {Switch, Route} from "react-router-dom";

describe("Presentation", ()=> {
    it("onChange", ()=> {
        const onSubmit = jest.fn();
        const result = render( <Provider store={store}><BrowserRouter>
            <LoginForm onSubmit= {onSubmit} />    
           </BrowserRouter></Provider>)
       
        act(()=> {
            fireEvent.click(result.queryByTestId(LoginIds.button));
        })
    
        expect(onSubmit).toBeCalled();
    })
})