import React from 'react';
import './Home.css';

export default () => (
  <div className="Home">
    <div className="lander">
      <a href="http://www.cancergenetrust.org">
        <img
          alt="Cancer Gene Trust Logo"
          src="cgt-logo-with-name.png"
          style={{ padding: '8px', height: '128px' }}
          className="center-block img-responsive"
        />
      </a>
      <br />
      <p>The Cancer Gene Trust (CGT) is a global off-blockchain distributed and de-centralized repository of health information. It is designed to liberate data from where it is siloed worldwide and make it accessible to researchers, clinicians, and citizen scientsts in realtime in a publicly open and available setting.</p>
    </div>
  </div>
);
