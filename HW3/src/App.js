import logo from './logo.svg';
import './App.css';
import { Conversation } from './comps/Dialog';
import {ChatList} from './comps/Chat';

function App() {
  return (
   <>
    <h1 className='head'>Homework</h1>
    <div className = "gener" >
      <ChatList name = "Item" className="list"/>
      <Conversation className = "dial"/>
    </div>
   </>
  );
}

export default App;
