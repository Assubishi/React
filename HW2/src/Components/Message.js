import React, { useState, useEffect } from "react";
export const MessageList = () => { 
    
    
    const [state, setState] = useState([]);

    const [save, setSave] = useState('')
   

    const addObj = (event) => {
        setSave(event.target.value);
    } 

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage('user', save);

        setSave('');
    }

    const sendMessage = (author, text) => {
        const newList = [...state];
        const newMessge = {
            author: author,
            text: text,
        }

        newList.push(newMessge);
        setState(newList)
    }
    useEffect(()=>{
        if(!state.length){
            return 0;
        }

        const last = state[state.length-1];
        if(last.author!=="bot"){
           const tap = setTimeout( ()=> {
            sendMessage('bot', 'hello')
           }, 1500);
           return() => {
               clearTimeout(tap);
           }
        }

    }, [state])
    return(
        <div>
          <div>
          {
               state.map((item)=>(
                    <div>
                       <p> {item.author}</p>
                       <p>{item.text} </p>
                    </div>
                ))
           }
          </div>

           <form onSubmit = {onSubmit}>
               <input value={save} onChange ={addObj} type = "text"/>

               <button type = "submit" >Send</button>
           </form>
        </div>
    );
};