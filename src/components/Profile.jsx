import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ProfileChores from "./ProfileChores";



function Profile(props){
    const currUser = props.isLoggedIn
    let navigate = useNavigate()
    const choresDB = props.choreList
    const userChores = choresDB.filter((chore)=>{
        return (chore.completed === "In Progress" && chore.user_id === currUser.id)
    })

    function createUserCard (chore){
       return( <ProfileChores 
        key={chore.id}
        chore={chore}
        choreList={props.choreList}
        setChoreList={props.setChoreList}
        />)
    }

   return( 
    <div className="profile">
        {currUser.length !== 0 ? 
        <div>
            <h1>{currUser.name}'s Profile</h1>
            <h3>{currUser.name}'s Chores To Do</h3>
            {userChores.map(createUserCard)}
            {currUser.admin ?
            <Link to="/admin">
                <button type="button">Admin Portal</button>
            </Link>:
            <div></div>}
            <button onClick={(event)=>{
                props.handleLogout(event)
            }}>Logout</button>
        </div>: 
        <div>
            <h1>Pleae login to view a profile</h1>
            <button onClick={(e)=>{
                e.preventDefault();
                navigate("/")
            }}>Login</button>
        </div>}
   </div>
   )
}

export default Profile;