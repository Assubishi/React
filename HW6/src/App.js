import {Switch, Route} from "react-router-dom";
import {Main} from './Comps'; 
import {Chats } from "./Comps/Redux/Chats"
import {Profile } from "./Comps/Redux/Profile"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Comps/Redux/store/index";
function App() {
  return (
    <div >
     
       <BrowserRouter>
       <h1>Homework</h1>
      
       <Switch>
       <Provider store = {store}>
      <Route path = "/profile">
     
               <Profile />
          </Route>
        
      <Route path = "/chats">
            
                <Chats />
            
          </Route>
          <Route exact path = "/">
            <Main />
          </Route>
          </Provider>
      </Switch>
      
       </BrowserRouter>
       
     
    </div>
  );
}

export default App;
