import { Headphones, Mic, BookOpenText, PenLine } from "lucide-react";
import useSeo from "../hooks/useSeo.js";
import PageHero from "../components/ui/PageHero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CtaBanner from "../components/ui/CtaBanner.jsx";
import Icon from "../components/ui/Icon.jsx";
import Photo from "../components/ui/Photo.jsx";
import { IMAGES } from "../data/images.js";
import { APPROACH, MODES } from "../data/general.js";

const SKILLS = [
  { icon: Mic, label: "Speaking" },
  { icon: Headphones, label: "Listening" },
  { icon: BookOpenText, label: "Reading" },
  { icon: PenLine, label: "Writing" },
];

export default function OnlineLearning() {
  useSeo({
    title: "Online Japanese Classes – Mode of Study | Sakura Language & Career Institute",
    description:
      "Live instructor-led online Japanese classes, small-group learning, personalized training and JLPT practice. Learn from anywhere, from home, school, college or work.",
    path: "/online-learning",
  });

  return (
    <>
      <PageHero
        crumb="Online Learning"
        eyebrow="Mode of Study"
        title="Live online classes, taught by real trainers"
        lead="Learn from experienced Japanese language trainers through interactive online sessions, from your home, school, college, or workplace."
      />

      <section className="section" aria-labelledby="modes-title">
        <div className="container">
          <SectionHeading
            eyebrow="How you can learn"
            title="Flexible ways to study Japanese"
            lead="Choose the format that fits your goals, schedule and learning style."
            id="modes-title"
          />
          <ul className="grid grid--2 mode-grid">
            {MODES.map((m) => (
              <li className="card mode" key={m.title}>
                <span className="feature__icon"><Icon name={m.icon} /></span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="skills-title">
        <div className="container">
          <SectionHeading
            eyebrow="Interactive sessions"
            title="Build all four core language skills"
            lead="Every session focuses on speaking, listening, reading, and writing, so your Japanese works in real situations."
            id="skills-title"
          />
          <ul className="skills">
            {SKILLS.map(({ icon: Ico, label }) => (
              <li key={label} className="skill">
                <Ico size={34} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeading
            eyebrow="Our Learning Approach"
            title="Assess. Learn. Practise. Evaluate. Prepare."
            id="approach-title"
          />
          <ol className="steps">
            {APPROACH.map((s, i) => (
              <li className="step" key={s.step}>
                <span className="step__num" aria-hidden="true">{i + 1}</span>
                <span className="step__icon"><Icon name={s.icon} size={30} /></span>
                <h3>{s.step}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="anywhere-title">
        <div className="container split">
          <figure className="photo-frame">
            <Photo image={IMAGES.hero} sizes="(min-width: 900px) 560px, 92vw" />
          </figure>
          <div className="prose">
            <p className="eyebrow">Learn from Anywhere</p>
            <h2 id="anywhere-title">Attend from home, school, college or workplace</h2>
            <p>
              Our live classes enable learners from different countries to join sessions wherever they
              are, subject to the course schedule and time-zone arrangements. Classes include
              trainer-led instruction, interactive learning, practice exercises, and JLPT-oriented
              preparation, subject to the selected course plan and schedule.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
