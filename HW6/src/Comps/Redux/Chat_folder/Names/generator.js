import React from 'react';
import {nanoid} from "nanoid";


const createChat = (i) => ({
    id: nanoid(),
    name: `name ${i}`
});

export const CHATS = Array.from({ length: 10 } ).map((_,i) =>  createChat(i) );