import React from 'react';

const FormItem = (props) => {
  return (
    <div className="form-item">
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} />
    </div>
  );
}

export default FormItem;
