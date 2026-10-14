export const FAQS = [
  {
    q: "Who can enrol at Sakura Language & Career Institute?",
    a: "Anyone aged 7 years and above can enrol in our Japanese language training programs. We welcome school students, college students from any degree or academic discipline, graduates, job seekers, and working professionals. Whether you are from Engineering, Arts and Science, Management, Commerce, Healthcare, IT, or any other field, you can learn Japanese with us.",
  },
  {
    q: "Do I need prior knowledge of Japanese?",
    a: "No prior knowledge is required. Beginners can start with JLPT N5 and gradually progress to higher levels. Learners with previous Japanese language knowledge can choose a suitable level based on their existing proficiency.",
  },
  {
    q: "Which JLPT levels do you teach?",
    a: "We offer structured Japanese language training and JLPT preparation for all five levels:",
    bullets: [
      ["N5 – Beginner:", "Basic Japanese language skills."],
      ["N4 – Elementary:", "Understanding familiar everyday Japanese."],
      ["N3 – Intermediate:", "Comprehending Japanese used in everyday situations with greater detail."],
      ["N2 – Upper-Intermediate:", "Understanding Japanese used in a wider range of everyday, academic, and professional contexts."],
      ["N1 – Advanced:", "Developing advanced Japanese comprehension skills."],
    ],
    after:
      "Our programs help learners progressively build their proficiency and prepare for the relevant JLPT examination.",
  },
  {
    q: "Are the classes conducted online?",
    a: "Yes. Our Japanese language training programs are delivered through live online classes, enabling learners from different countries to attend sessions from their homes, schools, colleges, or workplaces. Classes include trainer-led instruction, interactive learning, practice exercises, and JLPT-oriented preparation, subject to the selected course plan and schedule.",
  },
  {
    q: "What qualifications do your trainers hold?",
    a: "Our trainers hold Japanese Language Proficiency Test (JLPT) qualifications of N3 or above and have experience in Japanese language training. Trainer allocation depends on the course level and availability, with appropriately qualified trainers assigned to support learners at different stages of proficiency.",
  },
  {
    q: "Does Sakura conduct the official JLPT examination?",
    a: "Sakura Language & Career Institute provides Japanese language training and preparation for JLPT examinations from N5 to N1. The official JLPT examination is conducted through authorized examination organizers and test centres. Learners must register through the applicable official process. Examination registration, fees, dates, and test-centre availability are subject to the relevant examination authority.",
  },
  {
    q: "How long does each level take?",
    a: "The duration of each course depends on the learner's current proficiency, learning pace, class frequency, and practice time. We follow a structured learning approach that covers vocabulary, grammar, reading, listening, and examination preparation. Contact our team to learn about the current course duration, batch schedules, and available learning plans for each JLPT level.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Learners may receive an institute-issued course completion certificate upon meeting the applicable course requirements, subject to the selected program. This certificate is separate from the official JLPT certificate, which is awarded through the authorized JLPT examination system to candidates who meet the required examination criteria.",
  },
];

// Plain-text version used for FAQPage structured data (SEO).
export const faqPlainText = (f) =>
  [f.a, ...(f.bullets || []).map((b) => b.join(" ")), f.after].filter(Boolean).join(" ");
