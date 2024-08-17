import React from 'react';  
import TodoItem from './TodoItem';  

const TodoList = ({ tasks, deleteTask, toggleComplete, editTask, labels }) => {  
  return (  
    <ul className="list-group mt-4">  
      {tasks.map(task => (  
        <TodoItem   
          key={task.id}   
          task={task}   
          deleteTask={deleteTask}   
          toggleComplete={toggleComplete}   
          editTask={editTask}   
          labels={labels}  
        />  
      ))}  
    </ul>  
  );  
};  

export default TodoList;