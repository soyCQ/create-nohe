import { useState } from 'react';
import './main.css';
import reactLogo from './assets/react.svg';
import NoheLogo from './assets/nohe.png';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={NoheLogo} className="logo" alt="Farm logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NoheJS + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/main.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Nohejs and React logos to learn more
      </p>
    </>
  );
}
