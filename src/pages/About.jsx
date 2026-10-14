import { Eye, Target, CheckCircle2 } from "lucide-react";
import useSeo from "../hooks/useSeo.js";
import PageHero from "../components/ui/PageHero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CtaBanner from "../components/ui/CtaBanner.jsx";
import Icon from "../components/ui/Icon.jsx";
import Photo from "../components/ui/Photo.jsx";
import { IMAGES } from "../data/images.js";
import { MISSION, WHY_CHOOSE } from "../data/general.js";

export default function About() {
  useSeo({
    title: "About Us | Sakura Language & Career Institute",
    description:
      "Sakura is a Tokyo-based Japanese language institute making quality Japanese education accessible worldwide through live online training from JLPT N5 to N1.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Sakura Language & Career Institute"
        title="Connecting the World Through the Japanese Language"
        lead="A Tokyo-based Japanese language training institute committed to making quality Japanese language education accessible to learners worldwide."
      />

      <section className="section" aria-labelledby="who-title">
        <div className="container split split--top">
          <div className="prose">
            <h2 id="who-title">More than learning a language</h2>
            <p>
              Through live online training, we connect learners with experienced Japanese language
              trainers who guide them through a structured and progressive learning journey, from
              foundational Japanese to advanced proficiency.
            </p>
            <p>
              Our training programs follow the JLPT proficiency framework, covering levels N5, N4, N3,
              N2, and N1. We focus on building strong language fundamentals, practical communication
              skills, cultural understanding, and examination readiness.
            </p>
            <p>
              At Sakura, we believe that learning Japanese is more than acquiring a language. It is an
              opportunity to explore a new culture, access international education, develop
              professional skills, and pursue global career opportunities.
            </p>
            <p>
              We welcome learners aged 7 and above, offering age-appropriate learning approaches for
              children, school students, university students, and adults. Our goal is to help every
              learner develop confidence, competence, and a meaningful connection with Japan.
            </p>
          </div>
          <div className="about-media">
            <figure className="photo-frame">
              <Photo image={IMAGES.about} sizes="(min-width: 900px) 560px, 92vw" />
            </figure>
            <aside className="highlight-panel highlight-panel--float" aria-label="Our JLPT framework">
              <p className="eyebrow eyebrow--light">Our JLPT framework</p>
              <ul className="level-chips">
                {["N5", "N4", "N3", "N2", "N1"].map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <p>Five structured levels, from foundational Japanese to advanced proficiency.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="vm-title">
        <div className="container">
          <SectionHeading eyebrow="Vision & Mission" title="What guides everything we do" id="vm-title" />
          <div className="vm-grid">
            <article className="card vm-card vm-card--vision">
              <span className="feature__icon feature__icon--yellow"><Eye size={30} aria-hidden="true" /></span>
              <h3>Our Vision</h3>
              <p>
                To become a trusted global destination for Japanese language learning, empowering
                learners of all ages to connect with Japan through language proficiency, cultural
                understanding, and international opportunities.
              </p>
            </article>
            <article className="card vm-card">
              <span className="feature__icon"><Target size={30} aria-hidden="true" /></span>
              <h3>Our Mission</h3>
              <ul className="check-list">
                {MISSION.map((m) => (
                  <li key={m}><CheckCircle2 size={24} aria-hidden="true" /> <span>{m}</span></li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="choose-title">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose Sakura Language & Career Institute?"
            title="Learning built around you"
            id="choose-title"
          />
          <ul className="grid grid--3 feature-grid">
            {WHY_CHOOSE.map((f) => (
              <li className="card feature" key={f.title}>
                <span className="feature__icon"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
