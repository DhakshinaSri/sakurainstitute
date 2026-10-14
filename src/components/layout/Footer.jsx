import { Link } from "react-router-dom";
import { MapPin, Mail, Video } from "lucide-react";
import Logo from "../illustrations/Logo.jsx";
import { NAV_LINKS, SITE } from "../../data/site.js";
import { COURSES } from "../../data/courses.js";
import { PROGRAMS } from "../../data/programs.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer on-dark">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            Learn Japanese. Connect with Japan. Build Your Future. Structured, interactive and
            career-oriented Japanese language training from Tokyo, delivered live online.
          </p>
          <ul className="footer__contact">
            <li><MapPin size={20} aria-hidden="true" /> {SITE.location}</li>
            <li><Video size={20} aria-hidden="true" /> Online training – worldwide</li>
            {SITE.email && (
              <li><Mail size={20} aria-hidden="true" /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            )}
          </ul>
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="footer__title">Explore</h2>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
            <li><Link to="/contact">Contact / Enrol Now</Link></li>
          </ul>
        </nav>

        <nav aria-labelledby="footer-courses">
          <h2 id="footer-courses" className="footer__title">JLPT Courses</h2>
          <ul>
            {COURSES.map((c) => (
              <li key={c.level}><Link to={`/courses#${c.level.toLowerCase()}`}>JLPT {c.level} – {c.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-programs">
          <h2 id="footer-programs" className="footer__title">Who We Teach</h2>
          <ul>
            {PROGRAMS.map((p) => (
              <li key={p.id}><Link to={`/programs#${p.id}`}>{p.short}</Link></li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="footer__legal">
        <div className="container">
          <p>
            Sakura Language &amp; Career Institute provides Japanese language training and JLPT preparation.
            Official JLPT examinations and certificates are administered by the authorized examination
            organizers, not by the institute.
          </p>
          <p>© {year} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
