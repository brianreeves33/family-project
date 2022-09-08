import React from 'react'

function AdminCard(props){
    function handleSubmit(e){
        e.preventDefault()
        props.chore.completed = "Not Completed"
        props.chore.user_id = ""
        props.setChoreList([...props.choreList])
        localStorage.setItem("choreList", JSON.stringify(props.choreList))
    
    }
    return (
        <div className="card">
        <form onSubmit={handleSubmit}>
            <h2 id={props.chore.name}>{props.chore.name}</h2>
            <img src={props.chore.img} alt={props.chore.name} width="100" height="100"/>
            <p>To-Do: {props.chore.desc}</p>
            <p>Status: {props.chore.completed}</p>
            <button type="submit">Reset</button>
        </form>
    </div>
    )
}

export default AdminCard