import React from "react";
import { Link } from "react-router-dom";


const chats= [
    {
        name: "Oleg",
        index: 1,
        to: "/chats/1"
    },
    {
        name: "Igor",
        index: 2,
        to: "/chats/2"
    },
    {
        name: "Ivan",
        index: 3,
        to: "/chats/3"
    }
]


export const Chat = () => {
    return(
        <div> 
            {chats.map(({name, index, to})=> (
                <Link to={to}> {name} </Link>
            ))}
        </div>
    )
}