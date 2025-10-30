import React from 'react';
import './InputField.css';


function InputField({ 
  iconSrc, 
  iconAlt = "Ícone do campo", 
  type, 
  placeholder, 
  value, 
  onChange,
  required = false 
}) {
  return (
    <div className="input-field-container">
      <span className="input-icon">
        <img 
          src={iconSrc}
          alt={iconAlt} 
        />
      </span>
      
      <input 
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required} 
      />
    </div>
  );
}

export default InputField;