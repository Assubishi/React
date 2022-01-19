import React from "react";
import {userReducer, loginUserAction} from "./reducer";


describe("Basic", ()=> {
    it("Login", ()=> {
        const result = userReducer(undefined, loginUserAction("Assyl"));
        expect(result).toEqual({user: "Assyl"});
    })
})