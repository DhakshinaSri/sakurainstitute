import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CalendarCheck, Globe, Menu, X } from "lucide-react";
import Logo from "../illustrations/Logo.jsx";
import Button from "../ui/Button.jsx";
import { NAV_LINKS } from "../../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [location.pathname]);

  // Elevate header on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu and returns focus to the toggle button.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="topbar on-dark">
        <div className="container topbar__inner">
          <p><Globe size={18} aria-hidden="true" /> Tokyo, Japan <span aria-hidden="true">•</span> Live online Japanese classes worldwide</p>
          <Link to="/contact?type=counselling" className="topbar__link">
            <CalendarCheck size={18} aria-hidden="true" /> Book a Free Counselling Session
          </Link>
        </div>
      </div>

      <div className="container header__inner">
        <Logo />

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className="nav__link">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" variant="accent" className="nav__cta">Enrol Now</Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className="mobile-menu__link">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" variant="accent" size="lg" className="mobile-menu__cta">Enrol Now</Button>
        </nav>
      </div>
    </header>
  );
}
