import { CheckCircle2, Plus, Equal } from "lucide-react";
import useSeo from "../hooks/useSeo.js";
import PageHero from "../components/ui/PageHero.jsx";
import CtaBanner from "../components/ui/CtaBanner.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { COLLEGE_REASONS, DEGREES, PROGRAMS } from "../data/programs.js";

function ProgramBlock({ p, index }) {
  const alt = index % 2 === 1;
  return (
    <section id={p.id} className={`section program${alt ? " section--sand" : ""}`} aria-labelledby={`${p.id}-title`}>
      <div className="container split split--top">
        <div className="prose">
          <span className="feature__icon feature__icon--navy"><Icon name={p.icon} size={30} /></span>
          <h2 id={`${p.id}-title`}>{p.title}</h2>
          <p className="lead">{p.intro}</p>
          {p.body && <p>{p.body}</p>}
          {p.outro && <p><strong>{p.outro}</strong></p>}
          <Button to={`/contact?learner=${p.id}`} variant="accent" arrow>Enquire for {p.short}</Button>
        </div>
        <div className="card list-card">
          <h3>{p.listTitle}</h3>
          <ul className="check-list">
            {p.list.map((l) => (
              <li key={l}><CheckCircle2 size={24} aria-hidden="true" /> <span>{l}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Programs() {
  useSeo({
    title: "Japanese Training for Kids, Students & Professionals | Sakura Institute",
    description:
      "Live online Japanese classes for kids aged 7+, school and college students of all degrees, graduates, job seekers and working professionals. JLPT N5 to N1.",
    path: "/programs",
  });

  const college = PROGRAMS.find((p) => p.id === "college");
  const others = PROGRAMS.filter((p) => p.id !== "college");
  const ordered = [others[0], others[1], college, others[2], others[3]];

  return (
    <>
      <PageHero
        crumb="Programs"
        eyebrow="Children, Students & Professionals"
        title="Japanese Language Skills for a World of Opportunities"
        lead="Learn Japanese. Enhance your skills. Expand your global career opportunities. Japanese language learning is for everyone."
      />

      <section className="section section--tight" aria-labelledby="intro-title">
        <div className="container container--narrow center prose">
          <h2 id="intro-title" className="sr-only">About our programs</h2>
          <p className="lead">
            Whether you are a school student, college student, graduate, job seeker, or working
            professional, learning Japanese can help you broaden your horizons and explore
            international opportunities. Our live online programs run from JLPT N5 (Beginner) to JLPT
            N1 (Advanced), guided by experienced trainers holding JLPT qualifications of N3 or above.
          </p>
        </div>
      </section>

      <nav className="subnav" aria-label="Programs on this page">
        <div className="container">
          <ul>
            {PROGRAMS.map((p) => (
              <li key={p.id}><a href={`#${p.id}`}>{p.short}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      {ordered.map((p, i) =>
        p.id === "college" ? (
          <section key={p.id} id="college" className="section program program--college" aria-labelledby="college-title">
            <div className="container">
              <header className="section-head section-head--center">
                <span className="feature__icon feature__icon--navy"><Icon name={p.icon} size={30} /></span>
                <p className="eyebrow">Japanese Language Training for College Students</p>
                <h2 id="college-title">Any Degree. Any Department. One Global Language Advantage.</h2>
                <p className="lead">
                  Are you pursuing Engineering, Arts and Science, Management, Commerce, Computer
                  Applications, Healthcare, Life Sciences, Nursing, Pharmacy, Physiotherapy, or any other degree?
                </p>
              </header>

              <ul className="chips" aria-label="Degrees welcome">
                {DEGREES.map((d) => (<li key={d}>{d}</li>))}
                <li className="chips__more">…and any other degree</li>
              </ul>

              <p className="statement">You can learn Japanese regardless of your academic specialization.</p>
              <div className="prose container--narrow center">
                <p>
                  Sakura welcomes college students from all disciplines who wish to gain an additional
                  skill that may help differentiate their profiles in an increasingly interconnected job
                  market. You do not need to be an engineering or language student to enrol. Beginners
                  can start with JLPT N5 and progressively work toward N4, N3, N2, and N1.
                </p>
              </div>

              <h3 className="center sub-title">Why should college students learn Japanese?</h3>
              <ul className="grid grid--2 reason-grid">
                {COLLEGE_REASONS.map((r) => (
                  <li className="card feature feature--compact" key={r.title}>
                    <span className="feature__icon"><Icon name={r.icon} /></span>
                    <h4>{r.title}</h4>
                    <p>{r.text}</p>
                  </li>
                ))}
              </ul>

              <div className="equation" role="group" aria-label="Your degree plus Japanese language skills equals a broader career profile">
                <span className="equation__term">Your Degree</span>
                <Plus size={30} aria-hidden="true" />
                <span className="equation__term">Japanese Language Skills</span>
                <Equal size={30} aria-hidden="true" />
                <span className="equation__term equation__term--result">A Broader Career Profile</span>
              </div>
              <p className="center prose container--narrow">
                Your existing qualification gives you a foundation in your chosen field. Japanese
                language proficiency can complement that qualification and help you explore opportunities
                where Japanese communication skills are valued.
              </p>
              <p className="center mt">
                <Button to="/contact?learner=college" variant="accent" size="lg" arrow>Enquire for College Students</Button>
              </p>
            </div>
          </section>
        ) : (
          <ProgramBlock key={p.id} p={p} index={i} />
        )
      )}

      <section className="section band on-dark" aria-labelledby="journey-title">
        <div className="container container--narrow center">
          <h2 id="journey-title">Your Japanese Learning Journey Starts Here</h2>
          <p className="lead lead--light">
            Start with JLPT N5. Build your proficiency. Work toward N1. Explore a world of possibilities.
            Enrol in our live online Japanese language programs and take the next step toward your
            personal, academic, and professional goals.
          </p>
          <Button to="/contact" variant="yellow" size="lg" arrow>Enrol Now</Button>
        </div>
      </section>
    </>
  );
}
