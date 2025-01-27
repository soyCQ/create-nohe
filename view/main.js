import './style.css';
import Nohe from './assets/nohe.png'
import { setupCounter } from './counter';
import javascriptLogo from './assets/javascript.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="/" target="_blank">
      <img src="${Nohe}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="Javascript logo" />
    </a>
    <h1>Farm + Javascript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Nohejs and Javascript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
