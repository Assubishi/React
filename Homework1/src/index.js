import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './text.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let text = "For App I used this text"

const Message = (props) => {
 return ( <p className={'txtToChange'}>
  {props.text}
</p>)
}

ReactDOM.render(
  <Message text = {text}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
