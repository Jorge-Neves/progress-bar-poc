import React, { FC, useState, useEffect, useRef } from 'react';
import './App.css';

const App: FC = () => {
  const [percentage, setPercentage] = useState<string>('50%');

  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (progressBarRef.current !== null) {
      progressBarRef.current.style.width = percentage;
      console.log(progressBarRef2.current?.style.width);
    }
  });

  return (
    <div className="App">
      <div>
        <div>
          <p>Click me!</p>
          <div>
            <button type="button" onClick={() => setPercentage('10%')}>
              1/10
            </button>
            <button type="button" onClick={() => setPercentage('25%')}>
              1/4
            </button>
            <button type="button" onClick={() => setPercentage('50%')}>
              1/2
            </button>
            <button type="button" onClick={() => setPercentage('60%')}>
              3/5
            </button>
            <button type="button" onClick={() => setPercentage('90%')}>
              9/10
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div ref={progressBarRef} className="progress-bar" />
        </div>
      </div>
    </div>
  );
};

export default App;
