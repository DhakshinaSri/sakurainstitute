import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Globe, Mail, MapPin, Send } from "lucide-react";
import useSeo from "../hooks/useSeo.js";
import PageHero from "../components/ui/PageHero.jsx";
import { COURSES } from "../data/courses.js";
import { SITE } from "../data/site.js";

const LEARNERS = [
  { value: "kids", label: "Child (age 7+)" },
  { value: "school", label: "School student" },
  { value: "college", label: "College student" },
  { value: "graduates", label: "Graduate / Job seeker" },
  { value: "professionals", label: "Working professional" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({ id, label, required, error, hint, children }) {
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>
        {label} {required ? <span className="req" aria-hidden="true">*</span> : <span className="opt">(optional)</span>}
      </label>
      {hint && <p className="field__hint" id={`${id}-hint`}>{hint}</p>}
      {children}
      {error && <p className="field__error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  );
}

export default function Contact() {
  useSeo({
    title: "Contact & Enrol Now | Sakura Language & Career Institute",
    description:
      "Enquire or book a free counselling session with Sakura Language & Career Institute. Live online Japanese classes from Tokyo, JLPT N5 to N1, worldwide.",
    path: "/contact",
  });

  const [params] = useSearchParams();
  const level = COURSES.some((c) => c.level === params.get("level")) ? params.get("level") : "";
  const learner = LEARNERS.some((l) => l.value === params.get("learner")) ? params.get("learner") : "";
  const counselling = params.get("type") === "counselling";

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formRef = useRef(null);

  const validate = (d) => {
    const e = {};
    if (!d.name.trim()) e.name = "Please enter your name.";
    if (!d.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(d.email.trim())) e.email = "Please enter a valid email address, e.g. name@example.com.";
    if (!d.learner) e.learner = "Please choose who the course is for.";
    if (!d.consent) e.consent = "Please confirm that we may contact you about your enquiry.";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const data = Object.fromEntries(fd.entries());
    data.consent = fd.get("consent") === "on";
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) {
      const firstId = Object.keys(e)[0];
      formRef.current?.querySelector(`[name="${firstId}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      if (SITE.formEndpoint) {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
      } else if (SITE.email) {
        const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry – Sakura Language & Career Institute")}&body=${encodeURIComponent(body)}`;
      } else {
        // Demo mode: configure VITE_FORM_ENDPOINT or VITE_CONTACT_EMAIL in .env to receive enquiries.
        console.info("Enquiry (demo mode – not sent):", data);
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        crumb="Contact / Enrol Now"
        eyebrow="Contact Us"
        title="Begin Your Japanese Language Journey"
        lead="Whether you are enrolling your child, preparing for the JLPT, or learning Japanese for your future career, we are here to help you find the right course."
      />

      <section className="section" aria-labelledby="form-title">
        <div className="container contact-grid">
          <aside className="contact-info" aria-label="Institute details">
            <h2>Sakura Language &amp; Career Institute</h2>
            <ul>
              <li><MapPin size={26} aria-hidden="true" /> <span><strong>Tokyo, Japan</strong></span></li>
              <li><Globe size={26} aria-hidden="true" /> <span>Online Japanese Language Training – Worldwide</span></li>
              {SITE.email && (
                <li><Mail size={26} aria-hidden="true" /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              )}
            </ul>
            <div className="contact-info__box">
              <h3>What happens next?</h3>
              <ol>
                <li>Send us your enquiry.</li>
                <li>We learn about your level and goals.</li>
                <li>We suggest a suitable course, schedule and learning plan.</li>
              </ol>
            </div>
          </aside>

          <div className="card form-card">
            {status === "success" ? (
              <div className="form-success" role="status" tabIndex={-1}>
                <CheckCircle2 size={56} aria-hidden="true" />
                <h2>Thank you for your enquiry!</h2>
                <p>Our team will get back to you soon to help you find the right course.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate aria-labelledby="form-title">
                <h2 id="form-title">Student Enquiry Form</h2>
                <p className="form-note">Fields marked <span className="req" aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>

                <div className="form-row">
                  <Field id="name" label="Full name" required error={errors.name}>
                    <input id="name" name="name" type="text" autoComplete="name" aria-required="true"
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  </Field>
                  <Field id="email" label="Email address" required error={errors.email}>
                    <input id="email" name="email" type="email" autoComplete="email" aria-required="true"
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  </Field>
                </div>

                <div className="form-row">
                  <Field id="phone" label="Phone / WhatsApp">
                    <input id="phone" name="phone" type="tel" autoComplete="tel" />
                  </Field>
                  <Field id="learner" label="Who is the course for?" required error={errors.learner}>
                    <select id="learner" name="learner" defaultValue={learner} aria-required="true"
                      aria-invalid={!!errors.learner} aria-describedby={errors.learner ? "learner-error" : undefined}>
                      <option value="" disabled>Select learner type</option>
                      {LEARNERS.map((l) => (<option key={l.value} value={l.value}>{l.label}</option>))}
                    </select>
                  </Field>
                </div>

                <div className="form-row">
                  <Field id="level" label="Interested level">
                    <select id="level" name="level" defaultValue={level}>
                      <option value="">Not sure – help me choose</option>
                      {COURSES.map((c) => (<option key={c.level} value={c.level}>JLPT {c.level} – {c.name}</option>))}
                    </select>
                  </Field>
                  <Field id="request" label="I would like to">
                    <select id="request" name="request" defaultValue={counselling ? "counselling" : "enquiry"}>
                      <option value="enquiry">Make an enquiry</option>
                      <option value="counselling">Book a free counselling session</option>
                      <option value="enrol">Enrol in a course</option>
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Message">
                  <textarea id="message" name="message" rows="4" />
                </Field>

                <div className={`field field--check${errors.consent ? " has-error" : ""}`}>
                  <label className="check">
                    <input type="checkbox" name="consent" aria-required="true" aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? "consent-error" : undefined} />
                    <span>I agree that Sakura Language &amp; Career Institute may contact me about my enquiry. <span className="req" aria-hidden="true">*</span></span>
                  </label>
                  {errors.consent && <p className="field__error" id="consent-error" role="alert">{errors.consent}</p>}
                </div>

                {status === "error" && (
                  <p className="form-error" role="alert">Sorry, something went wrong while sending your enquiry. Please try again.</p>
                )}

                <button type="submit" className="btn btn--accent btn--lg" disabled={status === "sending"}>
                  <span>{status === "sending" ? "Sending…" : "Send Enquiry"}</span>
                  <Send size={20} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
