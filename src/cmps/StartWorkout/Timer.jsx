import React from 'react';

export function Timer(props) {
  const { seconds, isActive, onToggle, onResetTimer } = props

  const formatedTime = (time) => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }

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