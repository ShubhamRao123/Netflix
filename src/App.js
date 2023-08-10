import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribed =  auth.onAuthStateChanged(userAuth =>{
        if(userAuth){
          //logged In
          console.log(userAuth);
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
        }else{
          //logged Out
          dispatch(logout());
        }
    })

    return unsubscribed;  
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
