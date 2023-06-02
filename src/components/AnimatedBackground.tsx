import React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import '../styles/AnimatedBackground.css';

const AnimatedBackground = () => (
  <Flipper flipKey="animate">
    <Flipped flipId="background">
      <div className="background" />
    </Flipped>
  </Flipper>
);

export default AnimatedBackground;
