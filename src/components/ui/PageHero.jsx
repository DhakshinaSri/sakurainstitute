import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/** Inner-page banner with breadcrumb, H1 and intro. Gives each page one clear <h1>. */
export default function PageHero({ title, lead, crumb, eyebrow, children }) {
  return (
    <section className="page-hero on-dark" aria-labelledby="page-title">
      <div className="container page-hero__inner">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li aria-current="page">
              <ChevronRight size={18} aria-hidden="true" />
              <span>{crumb}</span>
            </li>
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1 id="page-title">{title}</h1>
        {lead && <p className="lead lead--light">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
