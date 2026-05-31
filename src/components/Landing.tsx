import { PropsWithChildren } from "react";
import { profile } from "../data/profile";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{profile.hero.intro}</h2>
            <h1>
              {profile.firstName}
              <br />
              <span>{profile.lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{profile.hero.eyebrow}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{profile.hero.primary}</div>
              <div className="landing-h2-2">{profile.hero.secondary}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{profile.hero.secondary}</div>
              <div className="landing-h2-info-1">{profile.hero.primary}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
