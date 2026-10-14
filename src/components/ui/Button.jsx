import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * variant: primary (navy) | accent (red) | yellow | outline | outline-light | ghost
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size,
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const cls = `btn btn--${variant}${size === "lg" ? " btn--lg" : ""} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight aria-hidden="true" size={20} strokeWidth={2.5} />}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}
