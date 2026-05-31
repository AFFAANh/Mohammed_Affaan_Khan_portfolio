import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { profile, socialLinks } from "../data/profile";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {profile.email}
              </a>
            </p>
            <p>{profile.phone}</p>
            <p>{profile.location}</p>
            <h4>Education</h4>
            {profile.education.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
                key={link.label}
              >
                {link.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{profile.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
