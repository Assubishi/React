import {Switch, Route} from "react-router-dom";
import {Main} from './Comps'; 
import {Chats } from "./Comps/Redux/Chats"
import {Profile } from "./Comps/Redux/Profile"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./Comps/Redux/store/index";
import {PersistGate} from "redux-persist/integration/react";
import {Posts} from "./Comps/Redux/Posts";

function App() {
  return (
    <div >
     
    <BrowserRouter>
      <h1>Homework</h1>
      
     <Switch>
       <Provider store = {store}>
         <PersistGate loading = {null} persistor={persistor}>
            <Route path = "/profile">
               <Profile />
            </Route>
        
            <Route path = "/chats">
              <Chats />            
            </Route>
            <Route path = "/posts">
               <Posts />
            </Route>
              <Route exact path = "/">
                <Main />
              </Route>
            </PersistGate>
          </Provider>
      </Switch>
      
    </BrowserRouter>
       
     
    </div>
  );
}

export default App;
