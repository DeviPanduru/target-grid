import React, { useState } from 'react';  

const LabelManager = ({ addLabel }) => {  
  const [labelName, setLabelName] = useState('');  

  const handleAddLabel = () => {  
    addLabel({ id: Date.now(), name: labelName });  
    setLabelName('');  
  };  

  return (  
    <div>  
      <h2>Manage Labels</h2>  
      <input  
        type="text"  
        value={labelName}  
        onChange={(e) => setLabelName(e.target.value)}  
        placeholder="New Label"  
      />  
      <button onClick={handleAddLabel} className="btn btn-secondary">Add Label</button>  
    </div>  
  );  
};  

export default LabelManager;