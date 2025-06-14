import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: 'transparent' }}>
      <div className="container text-center mb-4" data-aos="fade-up"> {/* animation added here */}
        <h2 className="fw-bold" style={{ color: '#FFD700' }}>Contact</h2>
        <p className="text-light">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">

          {/* Left Info Boxes */}
          <div className="col-lg-6 d-flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100"> {/* animate left box */}
            {[
              { icon: 'geo-alt', title: 'Address', text1: 'A108 Adam Street', text2: 'New York, NY 535022' },
              { icon: 'telephone', title: 'Call Us', text1: '+1 5589 55488 55', text2: '+1 6678 254445 41' },
              { icon: 'envelope', title: 'Email Us', text1: 'info@example.com', text2: 'contact@example.com' },
              { icon: 'clock', title: 'Open Hours', text1: 'Monday - Friday', text2: '9:00AM - 05:00PM' }
            ].map((item, idx) => (
              <div key={idx} className="bg-dark bg-opacity-50 shadow-lg rounded-4 p-4 text-start flex-fill" style={{ minWidth: '260px' }}>
                <i className={`bi bi-${item.icon} fs-2 mb-3`} style={{ color: 'gold' }}></i>
                <h5 className="text-white">{item.title}</h5>
                <p className="text-light mb-1">{item.text1}</p>
                <p className="text-light">{item.text2}</p>
              </div>
            ))}
          </div>

          {/* Right Side Contact Form */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200"> {/* animate right box */}
            <style>{`
              .contact-form input::placeholder,
              .contact-form textarea::placeholder {
                color: #f0f0f0;
                opacity: 1;
              }
            `}</style>

            <form className="contact-form bg-dark bg-opacity-50 shadow-lg rounded-4 p-4">
              <div className="row gy-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control bg-light bg-opacity-10 text-white border-0"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-light bg-opacity-10 text-white border-0"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control bg-light bg-opacity-10 text-white border-0"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control bg-light bg-opacity-10 text-white border-0"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn px-4 fw-bold border-0"
                    style={{ backgroundColor: '#800000', color: 'white' }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
