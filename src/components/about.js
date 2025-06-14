import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [modalImg, setModalImg] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section 
      id="about" 
      className="about section py-5 text-white bg-dark bg-opacity-50 p-2" 
      style={{
        marginTop: '80px',
        borderRadius: '15px',
        backdropFilter: 'blur(5px)',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '95%', // Keeps width limited on large screens but covers small devices fully
      }}
    >
      <div className="container" data-aos="fade-up">
        <h2 
          className="text-center mb-4" 
          style={{ 
            color: '#FFD700', 
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' // auto adjust heading size for small & big screens
          }}
        >
          About Us
        </h2>

        <div className="row">
          {/* Left Block - About Content */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <p>
              At <strong className="text-warning">Sanjeevani Care</strong>, we provide comprehensive medical services with a focus on preventive healthcare and personalized treatment.
            </p>
            <p>
              Our mission is to offer the best healthcare solutions through advanced diagnostics and experienced medical experts.
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check2-circle text-success me-2"></i> 24/7 Medical Support & Consultation.</li>
              <li><i className="bi bi-check2-circle text-success me-2"></i> Latest Diagnostic Equipment.</li>
              <li><i className="bi bi-check2-circle text-success me-2"></i> Certified & Experienced Medical Staff.</li>
            </ul>
          </div>

          {/* Right Block - Medical Photos with Pop-up */}
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-wrap">
            {['doctor1.png', 'hospital1.png', 'equipment1.png'].map((img, index) => (
              <img
                key={index}
                src={`/images/${img}`}
                alt="Medical"
                className="img-thumbnail m-2"
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  cursor: 'pointer', 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  objectFit: 'cover' 
                }}
                onClick={() => openModal(`/images/${img}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* React Modal for Image Pop-up */}
      {showModal && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1050 }}
          onClick={closeModal}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ position: 'relative', maxWidth: '95vw', maxHeight: '90vh' }}
          >
            <button
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={modalImg} 
              alt="Enlarged" 
              className="img-fluid rounded" 
              style={{ maxHeight: '80vh', maxWidth: '90vw' }} 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
