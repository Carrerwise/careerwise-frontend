import React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import '../styles/Background.css';

const Background = () => (
  <Flipper flipKey="animate">
    <Flipped flipId="background">
      <div className="background" />
    </Flipped>
  </Flipper>
);

export default Background;
