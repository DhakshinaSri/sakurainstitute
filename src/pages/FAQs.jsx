import { useMemo } from "react";
import useSeo from "../hooks/useSeo.js";
import PageHero from "../components/ui/PageHero.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import CtaBanner from "../components/ui/CtaBanner.jsx";
import { FAQS, faqPlainText } from "../data/faqs.js";

export default function FAQs() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: faqPlainText(f) },
      })),
    }),
    []
  );

  useSeo({
    title: "FAQs – Japanese Classes & JLPT | Sakura Language & Career Institute",
    description:
      "Answers about enrolment, JLPT levels N5 to N1, online classes, trainer qualifications, course duration and certificates at Sakura Language & Career Institute.",
    path: "/faqs",
    jsonLd,
  });

  const items = FAQS.map((f) => ({
    question: f.q,
    content: (
      <>
        <p>{f.a}</p>
        {f.bullets && (
          <ul className="plain-list">
            {f.bullets.map(([lead, rest]) => (
              <li key={lead}><strong>{lead}</strong> {rest}</li>
            ))}
          </ul>
        )}
        {f.after && <p>{f.after}</p>}
      </>
    ),
  }));

  return (
    <>
      <PageHero
        crumb="FAQs"
        eyebrow="Frequently Asked Questions"
        title="Answers to common questions"
        lead="Everything you need to know before you enrol. Can't find your answer? Our team is happy to help."
      />
      <section className="section" aria-label="Frequently asked questions">
        <div className="container container--narrow">
          <Accordion items={items} headingLevel="h2" />
        </div>
      </section>
      <CtaBanner title="Still have questions?" text="Contact our team to learn about current course duration, batch schedules, and available learning plans for each JLPT level." />
    </>
  );
}
