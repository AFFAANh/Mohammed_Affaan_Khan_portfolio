import { MdArrowOutward } from "react-icons/md";
import { certifications } from "../data/profile";
import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <div className="certs-section section-container" id="certifications">
      <div className="certs-container">
        <h2>
          Certifications <span>&</span>
          <br /> credentials
        </h2>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <a
              className="certs-card"
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              key={cert.title}
            >
              <div className="certs-card-top">
                <span className="certs-provider">
                  Issued by {cert.provider}
                </span>
                <span className="certs-date">{cert.date}</span>
              </div>
              <h4>{cert.issuer}</h4>
              <h5>{cert.title}</h5>
              <p>{cert.summary}</p>
              <div className="certs-tags">
                {cert.skills.map((skill) => (
                  <span className="certs-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <span className="certs-link">
                View certificate <MdArrowOutward />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
