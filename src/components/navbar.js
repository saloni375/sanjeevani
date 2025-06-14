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
    color: activeLink === link ? '#f8f9fa' : '#ddd',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    paddingBottom: '5px',
    display: 'inline-block',
    transform: activeLink === link ? 'scale(1.1)' : 'scale(1)', // pop effect on active
  });

  // const hoverStyle = {
  //   transition: 'all 0.3s ease',
  //   display: 'inline-block'
  // };

  const handleNavClick = (link) => {
  setActiveLink(link);
  const section = document.getElementById(link.toLowerCase()); // targets id="home", "about", "contact"
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); // smooth scrolling
  }
};


  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4 position-fixed w-100"
      style={{
        top: 0,
        left: 0,
        zIndex: 999
      }}
    >
   {    // eslint-disable-next-line 
   }
<a 
  className="navbar-brand fw-bold text-white" 
  href="#Home" 
  onClick={(e) => {
    e.preventDefault();
    handleNavClick('Home');
  }}
>
  SanjeevaniCare
</a>
 
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

          {['Home', 'About', 'Contact'].map((link) => (
            <li
              key={link}
              className="nav-item mx-2"
              ref={link === 'Home' ? homeRef : link === 'About' ? aboutRef : contactRef}
            >
              <span
                className="nav-link"
                style={linkStyle(link)}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.color = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.color = '#ddd';
                  }
                }}
                onClick={() => handleNavClick(link)}

              >
                {link}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
