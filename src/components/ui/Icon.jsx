import {
  Award, BadgeCheck, BarChart3, BookOpen, Briefcase, Building2, CalendarCheck, Circle, ClipboardCheck,
  Clock, Compass, FileText, Globe, GraduationCap, Handshake, Headphones, Landmark, Languages, Laptop,
  Layers, MessagesSquare, Mic, PenLine, Plane, Route, School, Search, Smile, Sparkles, Trophy,
  UserRound, Users, Video,
} from "lucide-react";

// Explicit map keeps the bundle small (only these icons are shipped).
const ICONS = {
  Award, BadgeCheck, BarChart3, BookOpen, Briefcase, Building2, CalendarCheck, ClipboardCheck, Clock,
  Compass, FileText, Globe, GraduationCap, Handshake, Headphones, Landmark, Languages, Laptop, Layers,
  MessagesSquare, Mic, PenLine, Plane, Route, School, Search, Smile, Sparkles, Trophy, UserRound, Users, Video,
};

/** Renders an icon by name – decorative by default (hidden from screen readers). */
export default function Icon({ name, size = 28, label, ...rest }) {
  const Cmp = ICONS[name] || Circle;
  return (
    <Cmp
      size={size}
      strokeWidth={2}
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
      {...rest}
    />
  );
}
