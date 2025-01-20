import React from 'react';
import { useState } from 'react';

const list = [
  "fare la spesa",
  "dare da mangiare al cane",
  "lavare casa"
]

const Main = () => {

  const [task, setTask] = useState(list)
  const [newTask, setNewTask] = useState('')

  const handlerSumbit = (e) => {
   e.preventDefault()
   setTask([newTask, ...task])
   if (newTask == '') {
    alert('Inserisci cosa devi fare')
   }
   setNewTask('')
  }

  return (
    <main>
      <div className="container m-5 text-center">
      <form className="form-inline d-flex" onSubmit={handlerSumbit}>
       <input className="form-control mr-sm-2" 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Aggiungi cosa devi fare" 
          aria-label="Search" />
       <button className="btn btn-outline-success my-2 my-sm-0 m-3" type="submit">Search</button>
      </form>

     <ul className="list-group m-2">
        {task.map((work, index) => (
         <li key={index} className="list-group-item">{work}</li> ))}    
     </ul> 
   </div>
    </main>
  )
}

export default Main