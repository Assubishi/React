import {Switch, Route} from "react-router-dom";
import {Main, Chats, Profile} from './Comps'; 
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Comps/Redux/store/index";
function App() {
  return (
    <div >
       <BrowserRouter>

       <h1>Homework</h1>
       <Switch>
      <Route path = "/profile">
            <Provider store = {store}>
               <Profile />
            </Provider>
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
