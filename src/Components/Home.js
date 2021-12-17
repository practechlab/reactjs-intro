import Footer from "./Footer";
import Header from "./Header";

import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
export default function Home() {
    const onDeleteinAppComponent = (e, todo) => {
        e.preventDefault();
    
        setTasks(tasks.filter((e) => {
          return e !== todo;
        }))
      }
      const onAddTask=(t,d)=>{
         
          let newSno=tasks[tasks.length-1].sno+1;
          
          let newTask={
            task:t,
            desc:d,
            sno:newSno
          }
          console.log(newTask);
          setTasks([...tasks,newTask]);
      }
      const [tasks, setTasks] = useState([
        {
          task: "Task 1 from Array checking loop",
          desc: "Task 1 description From Array",
          sno: 1
        },
        {
          task: "Task 2 from Array",
          desc: "Task 2 description From Array",
          sno: 2
        }, {
          task: "Task 3 from Array",
          desc: "Task 3 description From Array",
          sno: 3
        }, {
          task: "Task 4 from Array",
          desc: "Task 4 description From Array",
          sno: 4
        },
      ])
    return (
        <>
        <Header showSearch="false" />
       
        <div className="container-fluid">
           
        <AddTask onAddTask={onAddTask} />

        <TaskList tasks={tasks} onDelete={onDeleteinAppComponent} />
      </div>
       <Footer /></>
    )
}
