import { Info } from "lucide-react";
import useSeo from "../hooks/useSeo.js";
import PageHero from "../components/ui/PageHero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CtaBanner from "../components/ui/CtaBanner.jsx";
import Icon from "../components/ui/Icon.jsx";
import { CAREER_DISCLAIMER, PATHWAYS } from "../data/general.js";

export default function Careers() {
  useSeo({
    title: "Career Opportunities with Japanese | Sakura Language & Career Institute",
    description:
      "Explore education and career pathways connected with Japan: customer support, IT, business communication, translation and study in Japan. Learn Japanese with Sakura.",
    path: "/careers",
  });

  return (
    <>
      <PageHero
        crumb="Career Opportunities"
        eyebrow="Career & Learning Opportunities"
        title="Learn Japanese. Expand Your Opportunities."
        lead="Japanese language proficiency can support learners who wish to explore international education, professional development, and career opportunities connected with Japan."
      />

      <section className="section" aria-labelledby="paths-title">
        <div className="container">
          <SectionHeading
            eyebrow="Potential pathways include"
            title="Where Japanese can take you"
            lead="At Sakura, we aim to help learners develop language skills that can be valuable in a range of settings."
            id="paths-title"
          />
          <ul className="grid grid--3 feature-grid">
            {PATHWAYS.map((p) => (
              <li className="card feature" key={p.title}>
                <span className="feature__icon"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                {p.note && <p>{p.note}.</p>}
              </li>
            ))}
            <li className="card feature feature--accent">
              <h3>Build a foundation that lasts</h3>
              <p>Our programs focus on building a language foundation that learners can continue developing for their academic and professional goals.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container container--narrow">
          <div className="notice" role="note">
            <Info size={28} aria-hidden="true" />
            <p><em>{CAREER_DISCLAIMER}</em></p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
