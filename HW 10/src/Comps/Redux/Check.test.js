import {render} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Posts } from "./Posts";
import {Provider} from "react-redux";
import {store} from "./store/index";
import {Switch, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {justIds} from "./Posts";
describe("Check", ()=> {
    it("Just for Check", ()=> {
        const posts = "Posts";
        const component  = render(<Provider store={store}><BrowserRouter><Switch><Route>
        <Posts />    </Route>       </Switch> 
       </BrowserRouter></Provider>)
        const qwer = component.queryAllByTestId((justIds.id))[0];
        expect(qwer).toHaveTextContent("Posts");
           
    })
})