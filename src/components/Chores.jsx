import React from "react";
import { useNavigate } from "react-router";
import Chore from "./Chore"


function Chores(props){
    const choresDB = props.choreList
    const currUser = props.isLoggedIn
    let navigate = useNavigate()
    const choresToDo = choresDB.filter((chore)=>{
        return chore.completed === "Not Completed";
    })
    function createCard(chore){
    return (
        <Chore 
        key={chore.id}
        chore={chore}
        setChoreList={props.setChoreList}
        choreList={props.choreList}
        currUser={currUser}/>
    )
}

    return (
        <div className="choreList">
        {currUser.length !== 0 ? 
        <div>
            {choresToDo.map(createCard)}
            <button onClick={(e)=>{
                props.handleLogout(e)
            }}>Logout</button>
        </div>
        :
        <div>
            <h1>Please login to view chores to-do</h1>
            <button onClick={(e)=>{
                e.preventDefault();
                navigate("/")
            }}>Login</button>
        </div>}
        </div>
    )
}

export default Chores;
