import { useMemo } from "react";
import { CheckCircle2, Info, Users } from "lucide-react";
import useSeo from "../hooks/useSeo.js";
import PageHero from "../components/ui/PageHero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CtaBanner from "../components/ui/CtaBanner.jsx";
import Button from "../components/ui/Button.jsx";
import { COURSES, COURSE_DISCLAIMER } from "../data/courses.js";
import Photo from "../components/ui/Photo.jsx";
import { IMAGES } from "../data/images.js";
import { SITE } from "../data/site.js";

export default function Courses() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "JLPT Japanese Language Courses N5 to N1",
      itemListElement: COURSES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Course",
          name: `JLPT ${c.level} – ${c.name} Japanese`,
          description: c.summary,
          provider: { "@type": "EducationalOrganization", name: SITE.name, url: SITE.url },
          educationalLevel: c.name,
          inLanguage: "ja",
          hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
        },
      })),
    }),
    []
  );

  useSeo({
    title: "JLPT Courses N5 to N1 | Sakura Language & Career Institute",
    description:
      "Structured Japanese courses from JLPT N5 (Beginner) to N1 (Advanced). Live online, trainer-led classes with practice tests and exam guidance.",
    path: "/courses",
    jsonLd,
  });

  return (
    <>
      <PageHero
        crumb="Courses"
        eyebrow="Our Courses – JLPT N5 to N1"
        title="Structured Japanese training from beginner to advanced"
        lead="Choose the level that matches your current proficiency and progress at your own pace, all the way to JLPT N1."
      />

      <section className="section section--tight" aria-labelledby="level-nav-title">
        <div className="container">
          <h2 id="level-nav-title" className="sr-only">Jump to a level</h2>
          <ol className="level-path">
            {COURSES.map((c) => (
              <li key={c.level}>
                <a href={`#${c.level.toLowerCase()}`} className={`level-path__item tone-${c.tone}`}>
                  <span className="level-path__lvl">{c.level}</span>
                  <span className="level-path__name">{c.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--flush-top" aria-label="Course details">
        <div className="container course-list">
          {COURSES.map((c) => (
            <article id={c.level.toLowerCase()} className="course-card card" key={c.level} aria-labelledby={`${c.level}-title`}>
              <div className={`course-card__side tone-${c.tone}${c.image ? " has-image" : ""}`}>
                <span className="course-card__kanji" lang="ja" aria-hidden="true">{c.kanji}</span>
                {c.image && (
                  <figure className="course-card__figure">
                    <Photo image={IMAGES[c.image]} sizes="(min-width: 860px) 260px, 70vw" />
                  </figure>
                )}
                <span className="course-card__lvl">JLPT {c.level}</span>
                {c.badge && <span className="pill pill--light">{c.badge}</span>}
              </div>
              <div className="course-card__body">
                <h2 id={`${c.level}-title`}>JLPT {c.level} – {c.name} Level</h2>
                <p>{c.summary}</p>
                <h3 className="mini-title">What you will work on</h3>
                <ul className="check-list check-list--cols">
                  {c.topics.map((t) => (
                    <li key={t}><CheckCircle2 size={22} aria-hidden="true" /> <span>{t}</span></li>
                  ))}
                </ul>
                <p className="ideal"><Users size={22} aria-hidden="true" /> <span><strong>Ideal for:</strong> {c.idealFor}</span></p>
                <Button to={`/contact?level=${c.level}`} variant="primary" arrow>Enquire about {c.level}</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container container--narrow">
          <div className="notice" role="note">
            <Info size={28} aria-hidden="true" />
            <p>{COURSE_DISCLAIMER}</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
