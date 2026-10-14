export default function SectionHeading({ eyebrow, title, lead, align = "center", id, as: Tag = "h2" }) {
  return (
    <header className={`section-head section-head--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id}>{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
