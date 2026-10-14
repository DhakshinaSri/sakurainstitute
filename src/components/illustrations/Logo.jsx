import { Link } from "react-router-dom";

export function LogoMark({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="16" fill="#1E459F" />
      <g transform="translate(32 32)">
        <g fill="#FBF6EC">
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} cx="0" cy="-13" rx="8" ry="11" transform={`rotate(${r})`} />
          ))}
        </g>
        <circle r="6" fill="#CF2A2A" />
        <circle r="2.4" fill="#FABD32" />
      </g>
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? " logo--light" : ""}`}>
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">Sakura <span lang="ja" aria-hidden="true">桜</span></span>
        <span className="logo__sub">Language &amp; Career Institute</span>
      </span>
    </Link>
  );
}
