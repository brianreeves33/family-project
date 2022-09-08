import React from "react";

function ProfileChores(props){
    function handleSubmit(e){
        e.preventDefault()
        props.chore.completed = "Completed"
        props.setChoreList([...props.choreList])
        localStorage.setItem("choreList", JSON.stringify(props.choreList))
    }
    return (
        <div className="profileCard">
        <form onSubmit={handleSubmit}>
            <h2 id={props.name}>{props.chore.name}</h2>
            <img src={props.chore.img} alt={props.chore.name} width="100" height="100"/>
            <p>To-Do: {props.chore.desc}</p>
            <p>Status: {props.chore.completed}</p>
            <button type="submit">Done</button>
        </form>
    </div>
    )
}

export default ProfileChores;