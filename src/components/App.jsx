import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Taskbar from './Taskbar'
import Login from './Login'
import Profile from './Profile'
import Chores from './Chores'
import Admin from './Admin'
import { useEffect, useState } from 'react';
import {chores, users} from "../DB"

function App() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState([])
  const [choreList, setChoreList] = useState(chores)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setIsLoggedIn(foundUser)
    }
  }, [])

  useEffect(()=>{
    const savedChoreList = localStorage.getItem("choreList")
    if(savedChoreList){
      const foundChoreList = JSON.parse(savedChoreList)
      setChoreList(foundChoreList)
    }
  }, [])

  function handleLogout(e){
    e.preventDefault()
    setUser("")
    setPassword("")
    setIsLoggedIn([])
    localStorage.removeItem("user")
    window.location.reload(false)
  }

  return (
    <div className="app">
      <Router>
        <Taskbar />
        <Routes>
          <Route path="/" element={
            <Login 
            users={users} 
            user={user} 
            setUser={setUser} 
            password={password} 
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            handleLogout={handleLogout}/>} />
          <Route path="/profile" element={
            <Profile 
            isLoggedIn={isLoggedIn} 
            handleLogout={handleLogout}
            choreList={choreList}
            setChoreList={setChoreList}
            />} />
          <Route path="/chores" element={
            <Chores
            choreList={choreList}
            setChoreList={setChoreList}
            isLoggedIn={isLoggedIn}
            handleLogout = {handleLogout}
            />} 
          />
          <Route path="/admin" element={
            <Admin 
            isLoggedIn={isLoggedIn}
            choreList={choreList}
            setChoreList={setChoreList}
            handleLogout={handleLogout}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
