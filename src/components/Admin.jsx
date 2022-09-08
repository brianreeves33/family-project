import React from "react";
import { useNavigate } from "react-router";
import AdminCard from './AdminCard'

function Admin (props){
    const currUser = props.isLoggedIn
    let navigate = useNavigate()
    const choresDB = props.choreList
    const finishedChores = choresDB.filter((chore)=>{
        return chore.completed === "Completed"
    })
    
    function createAdminCard (chore){
        return (
        <AdminCard
        key={chore.id}
        chore={chore}
        choreList={props.choreList}
        setChoreList={props.setChoreList}
        />
        )
    }
    return (
        <div className="admin">
        {currUser.length !== 0 && currUser.admin ?
            <div>
                <h1>Admin Portal</h1>
                {finishedChores.map(createAdminCard)}
                <button onClick={(e)=>{
                    props.handleLogout(e)
                }}>Logout</button>
            </div>:
            <div>
                <h1>Please Login as a Administrative User</h1>
                <button onClick={(e)=>{
                    e.preventDefault();
                    navigate("/")
                }}>Login</button>
            </div>}
        </div>
    )
}

export default Admin