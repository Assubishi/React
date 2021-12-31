import {Switch, Route} from "react-router-dom";
import {Main, Profile, Chats} from './Comps'; 
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div >
       <BrowserRouter>

       <h1>Homework</h1>
       <Switch>
      <Route path = "/profile">
            <Profile />
          </Route>
      <Route path = "/chats">
            <Chats />
          </Route>
          <Route exact path = "/">
            <Main />
          </Route>
      </Switch>
       
       </BrowserRouter>
      
     
    </div>
  );
}

export default App;
