import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container d-flex justify-content-center align-items-center">
      <div className="contact-card glassmorphism p-5">
        <h2 className="text-gradient text-center mb-4">📩 Contact Us</h2>

        <form className="row g-3">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn contact-button w-100">
              ✉️ Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
