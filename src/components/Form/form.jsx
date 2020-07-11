import React from 'react';
import './form.css';

const Form = (props) => {
  const { inputValue, inputValueNotEmpty, handleChange, handleSubmit } = props;
  return (
    <div className="Form">
      <h2>Register New Todo</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <h3 className={inputValueNotEmpty ? "form-error__show" : "form-error__hide"}>Input cannot be empty</h3>
        <input type="text" placeholder="Enter a New Todo..." value={inputValue} onChange={(e) => handleChange(e.target.value)}/>
        <input type="submit" value="Add New Todo" />
      </form>
    </div>
  );
}

export default Form;
