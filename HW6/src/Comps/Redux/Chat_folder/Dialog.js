
import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import {ChatList} from "./ChatList";
import {ListInput} from "./Chat_Form/MessageInput";
import {MessageList} from "./Chat_Form/MessageList";
import { CHATS } from "./Names/generator";
import {Button, Input, Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessagesById } from "../store/messages/selectors";
import { createMessage } from "../store/messages/action";
import { hasChatById } from "../store/chats/selectors";

const useStyles = makeStyles (() => ({
    box: {
        display: 'flex',
        justifyContent: "space-between",

    },
    input: {
        width: '500px'
    }
}));


export const Dialog = () => {
    const { chatId } = useParams();
   
    const classes = useStyles();
    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));
    

    const sendMessage = (author, text) => {
      const newMessage = {
        author,
        text
      };
      dispatch(createMessage(newMessage, chatId));
    };
  
    const onSendMessage = (value) => {
      sendMessage("user", value);
    };
  
    useEffect(() => {
        let timeOut = null;
        if(!messageList || messageList.length===0) {
            return ;
        }
        if(messageList[messageList.length-1].author === "user") {
            timeOut =   setTimeout(()=> {
                sendMessage("bot", "I am robot");
           }, 1500);
        }

        return () => {
            clearTimeout(timeOut);
        }
    }, [messageList])
  
    
    if (!hasChat){
        return <Redirect to="/chats/" />;
    }
    return (
      <>
      <Box component="div" m= {6} >
        <MessageList messageList={messageList} />
        <ListInput className = {classes.input} onSend={onSendMessage} />
      </Box>
      </>
    );
  };



/*
import React, {useState, useEffect, useRef} from "react";
import {Button, Input, Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import  {useParams, Route, Redirect} from "react-router-dom";
import { CHATS } from "./Names/generator";


const useStyles = makeStyles (() => ({
    box: {
        display: 'flex',
        justifyContent: "space-between",

    },
    input: {
        width: '500px'
    }
}));

export const Dialog = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const { chatId } = useParams();

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const send = (author, text) => {
        const newList = [...messageList];
        const obj = {
            author,
            text
        }
        newList.push(obj);
        setMessageList(newList);
    }

    const forForm = (event) => {
        event.preventDefault();
        send("user", value);
        setValue("");
    }
    const date = new Date();;
    useEffect(() => {
        let timeOut = null;
        if(messageList.length===0) {
            return 0;
        }
        if(messageList[messageList.length-1].author == "user") {
            timeOut =   setTimeout(()=> {
            send("bot", "I am robot");
           }, 1500);
        }

        return () => {
            clearTimeout(timeOut);
        }
    }, [messageList])

  console.log(date);
    const classes = useStyles();
    const focus = useRef(null);

    useEffect(() => {
        focus.current.focus();

    })

    if(!(CHATS.find(({id}) => id ===chatId))){
        return (<Redirect to="/chats/" />);
    }
    return(

        <>

         <Box component="div" m= {6} className={classes.box}>
            <Box>

            {messageList.map((item) => 
                <Typography > {item.author} - {item.text}</Typography>
            )}

            <Box component="form" onSubmit={forForm}>
                <Input inputRef = {focus} value={value} onChange={onChange} className = {classes.input}/>
                <Button type = "submit">Send</Button>
            </Box>
            </Box>
        </Box>
        </>

    )
} */

