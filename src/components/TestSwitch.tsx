import ReactSwitch from 'react-switch';
import React from 'react';

type TestSwitchProps = {
    answers: Array<boolean>;
    idx: number;
    onAnswerUpdate: (idx: number, newAnswer: boolean) => void;
}

const TestSwitch = ({ answers, idx, onAnswerUpdate }: TestSwitchProps) => {
    const handleOnChange = () => {
        const newAnswer = !answers[idx]; 
        onAnswerUpdate(idx, newAnswer); 
    };
    
    return (
        <ReactSwitch
            checked={answers[idx]}
            onColor="#2cbe97"
            offColor="#c63530"
            onChange={handleOnChange}
            className="can-move-switch"
        />
    )
}

export default TestSwitch;