import React, { useState, useEffect } from 'react';  
import TodoList from './TodoList';  
import TaskForm from './TaskForm';  
import LabelManager from './LabelManager';  

const App = () => {  
  const [tasks, setTasks] = useState([]);  
  const [labels, setLabels] = useState([]);  

  useEffect(() => {  
    const storedTasks = localStorage.getItem('tasks');  
    const storedLabels = localStorage.getItem('labels');  
    if (storedTasks) setTasks(JSON.parse(storedTasks));  
    if (storedLabels) setLabels(JSON.parse(storedLabels));  
  }, []);  

  useEffect(() => {  
    localStorage.setItem('tasks', JSON.stringify(tasks));  
  }, [tasks]);  

  useEffect(() => {  
    localStorage.setItem('labels', JSON.stringify(labels));  
  }, [labels]);  

  const addTask = (task) => {  
    setTasks([...tasks, task]);  
  };  

  const editTask = (updatedTask) => {  
    const updatedTasks = tasks.map(task =>  
      task.id === updatedTask.id ? updatedTask : task  
    );  
    setTasks(updatedTasks);  
  };  

  const deleteTask = (id) => {  
    const updatedTasks = tasks.filter(task => task.id !== id);  
    setTasks(updatedTasks);  
  };  

  const toggleComplete = (id) => {  
    const updatedTasks = tasks.map(task =>  
      task.id === id ? { ...task, completed: !task.completed } : task  
    );  
    setTasks(updatedTasks);  
  };  

  const addLabel = (label) => {  
    setLabels([...labels, label]);  
  };  

  return (  
    <div className="container">  
      <h1>Todo App</h1>  
      <TaskForm addTask={addTask} labels={labels} />  
      <LabelManager addLabel={addLabel} />  
      <TodoList  
        tasks={tasks}  
        deleteTask={deleteTask}  
        toggleComplete={toggleComplete}  
        editTask={editTask}  
        labels={labels}  
      />  
    </div>  
  );  
};  

export default App;