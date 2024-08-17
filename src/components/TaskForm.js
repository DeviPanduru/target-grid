import React, { useState } from 'react';  

const TaskForm = ({ addTask, labels }) => {  
  const [description, setDescription] = useState('');  
  const [selectedLabels, setSelectedLabels] = useState([]);  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    const newTask = {  
      id: Date.now(),  
      description,  
      completed: false,  
      labels: selectedLabels,  
    };  
    addTask(newTask);  
    setDescription('');  
    setSelectedLabels([]);  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <div className="form-group">  
        <input  
          type="text"  
          className="form-control"  
          placeholder="Task Description"  
          value={description}  
          onChange={(e) => setDescription(e.target.value)}  
          required  
        />  
      </div>  
      <div className="form-group">  
        <label>Labels</label>  
        <select  
          multiple  
          className="form-control"  
          value={selectedLabels}  
          onChange={(e) => {  
            const options = e.target.options;  
            const values = [];  
            for (let i = 0; i < options.length; i++) {  
              if (options[i].selected) {  
                values.push(options[i].value);  
              }  
            }  
            setSelectedLabels(values);  
          }}  
        >  
          {labels.map(label => (  
            <option key={label.id} value={label.name}>{label.name}</option>  
          ))}  
        </select>  
      </div>  
      <button type="submit" className="btn btn-primary">Add Task</button>  
    </form>  
  );  
};  

export default TaskForm;