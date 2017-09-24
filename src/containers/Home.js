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
      <p>The Cancer Gene Trust (CGT) is a system designed to liberate clinical tumor data, especially molecular data, from medical institutions and other organizations worldwide and make it accessible for research use in real time. It will allow clinicians, researchers, and others to search cancer sequencing data and some clinical data in a publicly open and available setting, to identify similar cases from around the world.</p>
    </div>
  </div>
);
