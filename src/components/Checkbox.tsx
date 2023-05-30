import React from 'react';
import '../styles/Checkbox.css'

interface CheckboxProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, setValue }: CheckboxProps) => {
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const newValue = checked ? label : '';
    setValue(newValue);
  };

  return (
    <div>
      <label className={`checkbox-label ${value ? 'checked' : ''}`}>
        <input type="checkbox" onChange={handleCheckboxChange} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;