import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';


function App() {
  const [{}, dispatch]= useStateValue();

  useEffect(()=> {
    //will only run when the app component runs
    auth.onAuthStateChanged(authUser => {
        // console.log('the user is', authUser);

        if (authUser){
          //the user just logged in or was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          //user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
    })
  }, [])

  return (
      <Router>
        <div className="App">
        <Switch>
        <Route path = "/login">
         <Login/>
        </Route>
        <Route path = "/checkout">
        <Header />
        <Checkout/> 
        </Route>
        <Route path = "/payment">
        <Header />
        <Payment />
        </Route>
        <Route path = "/">
        <Header />
        <Home/>
        </Route>
       

      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
