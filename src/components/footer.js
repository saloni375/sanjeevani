import React from 'react';
import { Container } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-4">
      <Container>
        <div className="text-center mb-3">
          <p>
            © <span>Copyright</span>{' '}
            <strong className="px-1">SanjeevaniCare</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <a href="/" className="text-white mx-2">
            <FaTwitter />
          </a>
          <a href="/" className="text-white mx-2">
            <FaFacebookF />
          </a>
          <a href="/" className="text-white mx-2">
            <FaInstagram />
          </a>
          <a href="/" className="text-white mx-2">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="text-center small">
          Designed by{' '}
          <a href="https://bootstrapmade.com/" className="text-warning text-decoration-none">
            SanjeevaniCare
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
