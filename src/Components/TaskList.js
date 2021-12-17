import React from 'react'
import Task from './Task'

export default function TaskList({ tasks,onDelete }) {
    return (
        <>
            <div className="row">
                <div className="col-12">

                    {
                        tasks.map((t) => {
                            return <Task key={t.sno} todo={t} onDelete={onDelete} />
                        })
                    }

                </div>
            </div>
        </>
    )
}
