import React from "react";
import {Link} from "react-router-dom";


const linkes = [
    {
        to: "/",
        title: "Main page"
    },
    {
        to: "/chats",
        title: "Chat page"
    },
    {
        to: "/profile",
        title: "Profile page"
    }
]



export const Main = () => {
   
    return(
        <div >
            <h1>Main page</h1>

            {linkes.map(({to, title})=> (
               <div>
                    <Link to= {to}>{title} </Link>
                <br/>
                   </div>
            ))}
        </div>
    )
}