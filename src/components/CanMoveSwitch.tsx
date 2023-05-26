import ReactSwitch from 'react-switch';
import React from 'react';

type CanMoveSwitchProps = {
  canMove: boolean;
  setCanMove: (canMove: boolean) => void;
}

const CanMoveSwitch = ({ canMove, setCanMove }: CanMoveSwitchProps) => {
    return (
        <ReactSwitch
            checked={canMove}
            onColor="#2cbe97"
            offColor="#c63530"
            onChange={() => setCanMove(!canMove)}
            className="can-move-switch"
        />
    )
}

export default CanMoveSwitch;