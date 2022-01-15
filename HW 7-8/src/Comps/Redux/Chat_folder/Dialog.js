

import {  Redirect } from "react-router-dom";
import {ListInput} from "./Chat_Form/MessageInput";
import {MessageList} from "./Chat_Form/MessageList";
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";


import { withMessages} from "../hocs/withMessages";


const useStyles = makeStyles (() => ({
    box: {
        display: 'flex',
        justifyContent: "space-between",

    },
    input: {
        width: '500px'
    }
}));


export const DialogRender = ({messageList, hasChat, onSendMessage}) => {
    const classes = useStyles();
   
    
    

  
    
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

  export const Dialog = withMessages(DialogRender);