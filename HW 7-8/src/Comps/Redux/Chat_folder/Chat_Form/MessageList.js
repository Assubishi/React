
import { Typography } from "@material-ui/core";

export const MessageList = (props) => {
    return (
        <div>
             {props.messageList.map((item) => ( 
                <Typography key = {item.id}> {item.author} - {item.text}</Typography>
             )
         )}
        </div>
     )
}