import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

/** Accessible accordion (WAI-ARIA disclosure pattern). items: [{ id, question, content }] */
export default function Accordion({ items, allowMultiple = false, headingLevel = "h3" }) {
  const Heading = headingLevel;
  const base = useId();
  const [open, setOpen] = useState(() => new Set());

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const btnId = `${base}-btn-${i}`;
        const panelId = `${base}-panel-${i}`;
        return (
          <div className={`accordion__item${isOpen ? " is-open" : ""}`} key={item.question}>
            <Heading className="accordion__heading">
              <button
                type="button"
                id={btnId}
                className="accordion__button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                <span className="accordion__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="accordion__q">{item.question}</span>
                <ChevronDown className="accordion__chev" aria-hidden="true" size={24} />
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="accordion__panel"
              hidden={!isOpen}
            >
              <div className="accordion__content">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
