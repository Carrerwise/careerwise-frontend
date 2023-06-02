import ReactSwitch from 'react-switch';
import React from 'react';

type SwitchProps = {
    value: boolean;
    setValue: (value: boolean) => void;
}

const Switch = ({ value, setValue }: SwitchProps) => {
    return (
        <ReactSwitch
            checked={value}
            onChange={() => setValue(!value)}
            className="can-move-switch"
        />
    )
}

export default Switch;