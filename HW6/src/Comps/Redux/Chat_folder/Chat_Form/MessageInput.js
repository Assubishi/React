
import {useState} from "react";


export const ListInput   = (props) => {
  
    const [value, setValue] = useState("");

   

    const forForm = (event) => {
        event.preventDefault();
        props.onSend(value);
        setValue("");
    }
    
    const onChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <form onSubmit={forForm}>
            <input className={props.className} onChange={onChange} value = {value} type="text"/>
            <button>send</button>
        </form>
    );
}

