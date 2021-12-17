import React from 'react'
import PropTypes from 'prop-types';
export default function Task({todo,onDelete}) {
    return (
        <>
        <div className="card my-1">
        <div className="card-body">
            <h5 className="card-title">{todo.task}</h5>
            <p className="card-text">{todo.desc} </p>
            <a href="index.html" className="btn btn-danger pull-right" onClick={(e)=>onDelete(e,todo)}>Delete</a>
        </div>
    </div>
    </>
    )
}

