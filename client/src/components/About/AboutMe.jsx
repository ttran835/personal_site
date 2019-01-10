import React from 'react';
import Technical from './Technical';

export default function About(props) {
  return (
    <div class="card text-center">
      <div class="card-block">
        <h2 class="card-title">HELLO JUST A TEST</h2>
        <h4 class="card-subtitle mb-2 text-muted">Software Engineer</h4>
        <p class="card-text">
          I am a dedicated and experienced Software Engineer, who is passionate
          about developing sleek and intuitive User Interface in a market where
          consuers are in constant demand for better web browsing experience. I
          am a Software Engineer who is experienced with using ES6, Javascript,
          React, CSS, Foundation 6, Bootstrap, and Github for version control to
          deliver sleek and intuitive User Interface in a market where consumers
          are in constant demand for better web browsing experiences. I am also
          experience with working in a team using Agile method with effective
          communication to ensure deliverable are met.
        </p>

        <Technical />

        <a href="https://www.linkedin.com/in/timtran835/" class="card-link">
          LinkedIn
        </a>
        <a href="https://github.com/ttran835" class="card-link">
          GitHub
        </a>
      </div>
    </div>
  );
}
