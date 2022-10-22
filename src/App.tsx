import React, { FC, useState, useEffect, useRef } from 'react';
import './App.css';

enum ControlOptions {
  BUTTONS = 'buttons',
  SLIDER = 'slider',
}

const App: FC = () => {
  const [percentage, setPercentage] = useState<string>('50%');
  const [selectedControl, setSelectedControl] = useState<string>('buttons');

  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (progressBarRef.current !== null) {
      progressBarRef.current.style.width = percentage;
      console.log(progressBarRef2.current?.style.width);
    }
  });

  return (
    <>
      <div className="section-container">
        <div className="section">
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
        <div className="section">
          <p>Slide me!</p>
          <div>
            <input type="range" max="100" min="0" />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section">
          <p>percentage: {percentage}</p>
          <div ref={progressBarRef} className="progress-bar" />
        </div>
      </div>
    </>
  );
};

export default App;
