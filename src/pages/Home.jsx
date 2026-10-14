import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Baby, CheckCircle2 } from "lucide-react";
import useSeo from "../hooks/useSeo.js";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CtaBanner from "../components/ui/CtaBanner.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import Photo from "../components/ui/Photo.jsx";
import { IMAGES } from "../data/images.js";
import { COURSES } from "../data/courses.js";
import { PROGRAMS } from "../data/programs.js";
import { APPROACH, STATS, WHY_LEARN } from "../data/general.js";
import { FAQS } from "../data/faqs.js";

export default function Home() {
  useSeo({
    title: "Sakura Language & Career Institute | Learn Japanese Online – JLPT N5 to N1",
    description:
      "Tokyo-based Japanese language institute. Live online classes for children (7+), students and professionals. Structured JLPT N5 to N1 training with experienced trainers.",
    path: "/",
  });

  const faqPreview = FAQS.slice(0, 4).map((f) => ({
    question: f.q,
    content: <p>{f.a}</p>,
  }));

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" /> Tokyo, Japan &nbsp;|&nbsp; Live online worldwide
            </p>
            <h1 id="hero-title">
              Learn Japanese. <span className="text-red">Open Doors</span> to a Global Future.
            </h1>
            <p className="lead">
              Sakura Language &amp; Career Institute provides structured, interactive, and
              career-oriented Japanese language training to learners across the world through live
              online classes — from <strong>JLPT N5 (Beginner)</strong> to <strong>JLPT N1 (Advanced)</strong>.
            </p>
            <div className="hero__actions">
              <Button to="/courses" variant="accent" size="lg" arrow>Explore Courses</Button>
              <Button to="/contact?type=counselling" variant="outline" size="lg">Book a Free Counselling Session</Button>
            </div>
            <p className="hero__enquire">
              Have questions? <Link to="/contact">Enquire now <ArrowRight size={18} aria-hidden="true" /></Link>
            </p>
            <ul className="hero__trust" aria-label="Key highlights">
              <li><BadgeCheck size={22} aria-hidden="true" /> Trainers with JLPT N3+ qualifications</li>
              <li><Baby size={22} aria-hidden="true" /> Learners aged 7 and above</li>
              <li><CheckCircle2 size={22} aria-hidden="true" /> JLPT-focused practice &amp; guidance</li>
            </ul>
          </div>
          <div className="hero__art">
            <figure className="hero-photo">
              <Photo
                image={IMAGES.hero}
                sizes="(min-width: 960px) 520px, 92vw"
                priority
              />
              <span className="float-badge float-badge--blue" aria-hidden="true">JLPT N5 → N1</span>
              <span className="float-badge float-badge--live" aria-hidden="true"><i /> Live class</span>
            </figure>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats on-dark" aria-label="Institute at a glance">
        <div className="container">
          <dl className="stats__grid">
            {STATS.map((s) => (
              <div className="stat" key={s.value}>
                <dt className="stat__value">{s.value}</dt>
                <dd className="stat__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section" aria-labelledby="welcome-title">
        <div className="container split">
          <div>
            <p className="eyebrow">Welcome to Sakura</p>
            <h2 id="welcome-title">Your journey to mastering the Japanese language starts here</h2>
          </div>
          <div className="prose">
            <p>
              Based in Tokyo, Japan, Sakura Language &amp; Career Institute connects learners worldwide
              with experienced Japanese language trainers through live online classes.
            </p>
            <p>
              Our programs are designed for children, students, working professionals, aspiring
              Japanese language learners, and individuals planning to study, work, or build a career in
              Japan. Whether you are learning for personal growth, academic opportunities, career
              advancement, or international exposure, Sakura supports you at every step.
            </p>
            <Link to="/about" className="text-link">More about our institute <ArrowRight size={20} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* WHY SAKURA */}
      <section className="section section--sand" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading
            eyebrow="Why learn with Sakura?"
            title="Everything you need to learn Japanese with confidence"
            lead="Structured lessons, qualified trainers and a clear path from your first hiragana to JLPT N1."
            id="why-title"
          />
          <ul className="grid grid--3 feature-grid">
            {WHY_LEARN.map((f) => (
              <li className="card feature" key={f.title}>
                <span className="feature__icon"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COURSES */}
      <section className="section" aria-labelledby="courses-title">
        <div className="container">
          <div className="split course-intro">
            <figure className="photo-frame">
              <Photo image={IMAGES.courseOverview} sizes="(min-width: 900px) 560px, 92vw" />
            </figure>
            <div>
              <p className="eyebrow">Our Courses – JLPT N5 to N1</p>
              <h2 id="courses-title">A structured pathway from beginner to advanced</h2>
              <p className="lead">
                Structured Japanese language training from beginner to advanced proficiency. Start with
                hiragana and katakana at N5, build your proficiency step by step, and work toward N1.
              </p>
              <Button to="/courses" variant="primary" arrow>Compare all levels</Button>
            </div>
          </div>
          <ol className="course-rail">
            {COURSES.map((c) => (
              <li key={c.level}>
                <Link to={`/courses#${c.level.toLowerCase()}`} className={`course-tile tone-${c.tone}`}>
                  <span className="course-tile__kanji" lang="ja" aria-hidden="true">{c.kanji}</span>
                  <span className="course-tile__level">JLPT {c.level}</span>
                  <span className="course-tile__name">{c.name}</span>
                  {c.badge && <span className="pill">{c.badge}</span>}
                  <span className="course-tile__more">View details <ArrowRight size={18} aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section section--white" aria-labelledby="audience-title">
        <div className="container">
          <SectionHeading
            eyebrow="Children, Students & Professionals"
            title="Japanese language skills for a world of opportunities"
            lead="Whether you are 7 years old, pursuing a college degree, preparing for your first job, or advancing your career, we can help you begin."
            id="audience-title"
          />
          <ul className="grid grid--3 audience-grid">
            {PROGRAMS.map((p) => (
              <li key={p.id}>
                <Link to={`/programs#${p.id}`} className="card audience">
                  <span className="feature__icon feature__icon--navy"><Icon name={p.icon} /></span>
                  <h3>{p.short}</h3>
                  <p>{p.cardText}</p>
                  <span className="text-link">Learn more <ArrowRight size={20} aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
            <li>
              <div className="card audience audience--highlight">
                <h3>Not sure where to start?</h3>
                <p>Start with JLPT N5, build your proficiency, and work toward N1. We will help you find the right level.</p>
                <Button to="/contact?type=counselling" variant="yellow">Get free counselling</Button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeading
            eyebrow="Our Learning Approach"
            title="Assess. Learn. Practise. Evaluate. Prepare."
            lead="A simple five-step cycle that keeps every learner moving toward their JLPT goal."
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

      {/* CAREER BAND */}
      <section className="section band on-dark" aria-labelledby="career-title">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow--light">Career &amp; Learning Opportunities</p>
            <h2 id="career-title">Learn Japanese. Expand your opportunities.</h2>
            <p className="lead lead--light">
              Japanese language proficiency can support learners who wish to explore international
              education, professional development, and career opportunities connected with Japan.
            </p>
            <Button to="/careers" variant="yellow" arrow>Explore career pathways</Button>
          </div>
          <ul className="band__list">
            {["Customer support and international business services", "IT and technology organizations working with Japanese clients", "Higher education and language study in Japan", "Business communication and cross-cultural collaboration"].map((t) => (
              <li key={t}><CheckCircle2 size={26} aria-hidden="true" /> <span>{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            lead="Quick answers about enrolment, levels, trainers and certificates."
            id="faq-title"
          />
          <Accordion items={faqPreview} />
          <p className="center mt">
            <Link to="/faqs" className="text-link">See all FAQs <ArrowRight size={20} aria-hidden="true" /></Link>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
