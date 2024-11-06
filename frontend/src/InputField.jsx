import React from 'react';

function InputField({ value, onChange }) {
  return (
    <input type="text" value = { value } onChange = { onChange } className="input-field" placeholder="Type in text" />
  )
}

export default InputField
