import React from "react";
import { useNavigate } from "react-router";

function Login(props){

  let navigate = useNavigate()

  function handleUsername (event){
    props.setUser(event.target.value)
  }

  function handlePassword (event){
    props.setPassword(event.target.value)
  }

  function handleClick (event){
    event.preventDefault()
    const userDB = props.users
    const userLoggedIn = userDB.filter((user) => {
      return user.name === props.user  && user.password === props.password
    })
    if (!userLoggedIn[0]){
      navigate("/")
      alert("Username and/or password incorrect. Case Sensitive!")
    }else{
    props.setIsLoggedIn(userLoggedIn[0])
    localStorage.setItem("user", JSON.stringify(userLoggedIn[0]))
    navigate("/profile")}
  }
  return (
  
  <div className="home">
  {props.isLoggedIn.length === 0 ?
    <div>
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        <input type="text" onChange={handleUsername} placeholder="username" value={props.user}/>
        <input type="password" onChange={handlePassword} placeholder="password" value={props.password}/>
        <button type="submit">Login</button>
      </form>
    </div> : 
    <div>
    <h1>{props.isLoggedIn.name} is already logged In</h1>
    <button onClick={props.handleLogout}>Logout</button>
    </div>}
  </div>  )}
  

export default Login;
