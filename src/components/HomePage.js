import React, { useState, useEffect } from 'react';

const HomePage = () => {
  // Countdown Logic
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
  const [status, setStatus] = useState('idle'); // For subscribe form

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      const success = Math.random() > 0.3;
      setStatus(success ? 'success' : 'error');
    }, 1500);
  };

  return (
<div
  id="home"
  className="main-content text-center text-white d-flex flex-column justify-content-center align-items-center mx-auto p-4 rounded bg-dark bg-opacity-50"
  style={{
    maxWidth: '95vw',         // responsive to device width
    width: '1100px',           // on large screens max width
    padding: '60px 20px',     // vertical and horizontal padding
    margin: '70px auto 60px', // top, auto, bottom
    borderRadius: '20px',     // smooth corners
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // transparent bg
    boxSizing: 'border-box',  // include padding in width
  }}
>


      {/* Coming Soon */}
      <h2
        className="fw-bold display-5 text-warning text-center"
        style={{
          letterSpacing: '8px',
          textTransform: 'uppercase',
          marginTop: '10px',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' // Auto resize on devices
        }}
      >
        Sanjeevani Care
      </h2>

      <div style={{ marginTop: '40px' }}>
        <h1 className="display-6 fw-bold">Something Awesome Is In The Work</h1>
        <p className="lead">We are still working on our website. Stay tuned for updates!</p>
      </div>

     {/* Countdown */}
<div className="countdown-wrapper d-flex justify-content-center align-items-center mt-4">
  {Object.keys(timeLeft).map(interval => (
    <div
      key={interval}
      className="p-2 text-white border border-danger rounded text-center countdown-box"
    >
      <h2>{timeLeft[interval]}</h2>
      <p>{interval}</p>
    </div>
  ))}
</div>

<style>
{`
  .countdown-wrapper {
    display: flex;
    flex-wrap: nowrap;          /* No wrapping allowed */
    overflow-x: auto;           /* Allow horizontal scroll on very small devices */
    gap: 10px;                  /* gap between boxes */
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .countdown-box {
    background-color: rgba(0, 0, 0, 0.6);
    width: 70px;              /* controlled width */
    height: 90px;
    flex: 0 0 auto;           /* do not grow or shrink */
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
    border: 1px solid red;
    border-radius: 8px;
  }

  .countdown-box h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  .countdown-box p {
    font-size: 0.7rem;
    word-wrap: break-word;
    white-space: normal;
    margin: 0;
  }

  @media (max-width: 480px) {
    .countdown-box {
      width: 60px;
      height: 80px;
    }

    .countdown-box h2 {
      font-size: 1rem;
    }

    .countdown-box p {
      font-size: 0.6rem;
    }
  }
`}
</style>



      {/* Subscribe Box */}
      <div className="container my-4">
        <style>
          {`
            .newsletter-form input[type="email"] {
              padding: 10px 15px;
              background-color: transparent;
              border: 1px solid rgba(255, 255, 255, 0.5);
              color: white;
              width: 100%;
              max-width: 300px;
              border-radius: 4px;
            }

            .newsletter-form input[type="email"]::placeholder {
              color: #f0f0f0;
              opacity: 1;
            }

            .newsletter-form input[type="submit"] {
              padding: 10px 25px;
              margin-left: 10px;
              background-color: #800000;
              color: white;
              border: none;
              border-radius: 4px;
              font-weight: bold;
              transition: all 0.3s ease;
            }

            .newsletter-form input[type="submit"]:hover {
              background-color: #a00000;
              transform: scale(1.05);
            }

            .loading,
            .sent-message,
            .error-message {
              margin-top: 10px;
              font-size: 0.95rem;
              display: none;
            }

            .loading.active,
            .sent-message.active,
            .error-message.active {
              display: block;
            }

            .sent-message {
              color: #00cc66;
            }

            .error-message {
              color: #ff3333;
            }
          `}
        </style>

        <div className="col-lg-6 mx-auto text-center">
          <p className="mb-3 text-light fs-5">Subscribe now to get the latest updates!</p>

          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="newsletter-form d-flex justify-content-center flex-wrap gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <input type="submit" value="Subscribe" />
            </div>

            <div className={`loading ${status === 'loading' ? 'active' : ''}`}>Loading...</div>
            <div className={`error-message ${status === 'error' ? 'active' : ''}`}>
              Something went wrong. Please try again.
            </div>
            <div className={`sent-message ${status === 'success' ? 'active' : ''}`}>
              Your subscription request has been sent. Thank you!
            </div>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links d-flex justify-content-center gap-4 mt-4 my-5">
        <style>
          {`
            .social-links a {
              transition: color 0.3s ease, transform 0.3s ease;
            }

            .social-links a:hover {
              color: #ff6666;
              transform: scale(1.1);
            }
          `}
        </style>

        <a href="/" className="text-light fs-4" aria-label="Twitter">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="/" className="text-light fs-4" aria-label="Facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="/" className="text-light fs-4" aria-label="Instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="/" className="text-light fs-4" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
