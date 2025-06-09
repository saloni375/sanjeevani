import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const underlineRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const refs = {
      'Home': homeRef,
      'About': aboutRef,
      'Contact': contactRef
    };
    const activeElement = refs[activeLink].current;

    if (activeElement && underlineRef.current) {
      underlineRef.current.style.width = `${activeElement.offsetWidth}px`;
      underlineRef.current.style.left = `${activeElement.offsetLeft}px`;
    }
  }, [activeLink]);

  const linkStyle = (link) => ({
    color: activeLink === link ? '#f8f9fa' : '#ddd', // slight white on active, light gray on inactive
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    paddingBottom: '5px'
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 position-relative">
      <a className="navbar-brand fw-bold text-white" href="#">ComingSoon</a>
      <div className="collapse navbar-collapse justify-content-end position-relative">
        <ul className="navbar-nav position-relative">
          <div 
            ref={underlineRef}
            style={{
              position: 'absolute',
              height: '2px',
              background: 'red',
              bottom: '0',
              left: '0',
              transition: 'all 0.3s ease'
            }}
          />
          <li className="nav-item mx-2" ref={homeRef}>
            <span
              className="nav-link"
              style={linkStyle('Home')}
              onClick={() => setActiveLink('Home')}
            >
              Home
            </span>
          </li>
          <li className="nav-item mx-2" ref={aboutRef}>
            <span
              className="nav-link"
              style={linkStyle('About')}
              onClick={() => setActiveLink('About')}
            >
              About
            </span>
          </li>
          <li className="nav-item mx-2" ref={contactRef}>
            <span
              className="nav-link"
              style={linkStyle('Contact')}
              onClick={() => setActiveLink('Contact')}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
