import React from 'react';
import '../styles/Checkbox.css'

interface CheckboxProps {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, setValue }: CheckboxProps) => {

  return (
    <div>
      <label className={`checkbox-label ${value ? 'checked' : ''}`}>
        <input type="checkbox" checked={value} onChange={() => setValue(!value)} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;