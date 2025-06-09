import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="d-flex justify-content-center gap-4 mt-4">
      {Object.keys(timeLeft).map(interval => (
        <div 
          key={interval} 
          className="p-3 text-white border border-danger rounded" 
          style={{ backgroundColor: 'transparent' }} // Transparent background here
        >
          <h2>{timeLeft[interval]}</h2>
          <p>{interval}</p>
        </div>
      ))}
    </div>
  );
};

export default CountDown;
