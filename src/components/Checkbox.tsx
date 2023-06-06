import React from 'react';
import '../styles/Form.css';

type CheckboxProps = {
  labels: Array<string>;
  values: Array<string>;
  setValues: (values: Array<string>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ labels, values, setValues}) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setValues([...values, value]);
    } else {
      setValues(values.filter((option) => option !== value));
    }
  };

  return (
    <div >
    {labels.map((label) => (
      <div key={label}>
        <label className='checkbox-label'>
          <input
            type="checkbox"
            value={label}
            checked={values.includes(label)}
            onChange={handleCheckboxChange}
          />
        {label}
        </label>
      </div>
    ))}
    </div>
  );
};

export default Checkbox;
