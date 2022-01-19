import {Switch, Route} from "react-router-dom";
import {Main} from './Comps';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import {Chats } from "./Comps/Redux/Chats"
import {Profile } from "./Comps/Redux/Profile"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./Comps/Redux/store/index";
import {PersistGate} from "redux-persist/integration/react";
import {Posts} from "./Comps/Redux/Posts";
import {SignUp} from "./Comps/Redux/pages/SignUp";
import {Login } from "./Comps/Redux/pages/LoginFunc";
import {PrivateRoute, PublicRoute} from "./Comps/Redux/hocs/PrivateorPublic";
import { getIsAuth } from "./Comps/Redux/store/user/reducer";
import {inAuthAction} from "./Comps/Redux/store/user/reducer";


function App() {

  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(inAuthAction);
  }, []);



  return (
    <div >
      
    <BrowserRouter>
      <h1>Homework</h1>
      <Provider store={store}>
        <Switch>
    
         <PersistGate loading = {null} persistor={persistor}>
          <Route auth={isAuth} path = "/profile">
               <Profile />
            </Route>
            <PrivateRoute auth={isAuth} path = "/chats">
              <Chats />            
            </PrivateRoute>

            <Route auth={isAuth} path = "/posts">
               <Posts />
            </Route>
            <PublicRoute auth={isAuth} path = "/signup">
               <SignUp />
            </PublicRoute>
            <PublicRoute auth={isAuth} exact path="/login">
              <Login />
            </PublicRoute> 
              <Route  exact path = "/">
                <Main />
              </Route>
            </PersistGate>
            
      </Switch>
      </Provider>
    </BrowserRouter>
       
    
    </div>
  );
}

export default App;

