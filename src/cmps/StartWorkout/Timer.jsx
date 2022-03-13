import React, { useState, useEffect } from 'react';

export function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive(!isActive);
  }

  const onResetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  }

  const formatedTime = (time) => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer-container flex column">
      <div className="time">
        {formatedTime(seconds)}
      </div>
      <div className='timer-btns'>
        <button className={`start-pause-btn start-pause-btn-${isActive ? 'active' : 'inactive'}`} onClick={onToggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="reset-btn" onClick={onResetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};