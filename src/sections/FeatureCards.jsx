import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

// Renders the "why work with me" highlight cards. Deliberately kept as its
// own lightweight section (no scroll animation) so it can sit right above
// the Footer without competing with heavier GSAP-driven sections.
const FeatureCards = () => (
  <div className="w-full section-padding padding-x-lg">
    <TitleHeader title="Why Work With Me" sub="✨ What Sets My Work Apart" />

    <div className="mx-auto feature-grid mt-12">
      {abilities.map(({ imgPath, title, desc }) => (
        <div key={title} className="feature-card">
          <div className="feature-icon-wrapper">
            <img src={imgPath} alt={title} className="feature-icon" />
          </div>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-desc">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
