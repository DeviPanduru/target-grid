import React, { useState } from 'react';  

const TodoItem = ({ task, deleteTask, toggleComplete }) => {  
  const [isEditing, setIsEditing] = useState(false);  
  const [newDescription, setNewDescription] = useState(task.description);  

  const handleEdit = () => {  
    task.description = newDescription;  
    toggleComplete(task.id);  
    setIsEditing(false);  
  };  

  return (  
    <li className="list-group-item d-flex justify-content-between align-items-center">  
      {isEditing ? (  
        <>  
          <input   
            type="text"   
            value={newDescription}   
            onChange={(e) => setNewDescription(e.target.value)}   
          />  
          <button onClick={handleEdit} className="btn btn-success">Save</button>  
        </>  
      ) : (  
        <>  
          <span   
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}  
            onClick={() => toggleComplete(task.id)}>  
            {task.description} - Labels: {task.labels.join(", ")}  
          </span>  
          <div>  
            <button onClick={() => setIsEditing(true)} className="btn btn-warning btn-sm">Edit</button>  
            <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">Delete</button>  
          </div>  
        </>  
      )}  
    </li>  
  );  
};  

export default TodoItem;