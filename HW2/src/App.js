import styles from './App.module.css';
import { MessageList } from './Components/Message';
import React, {useState, useEffect} from 'react';



function App() {
  return (
   <div>
     <h1>Homework</h1>
      <MessageList />
   </div>
  );
}

export default App;
