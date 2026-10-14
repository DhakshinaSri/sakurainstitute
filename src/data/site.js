export const SITE = {
  name: "Sakura Language & Career Institute",
  shortName: "Sakura Institute",
  tagline: "Learn Japanese. Connect with Japan. Build Your Future.",
  url: (import.meta.env.VITE_SITE_URL || "https://www.example.com").replace(/\/$/, ""),
  email: import.meta.env.VITE_CONTACT_EMAIL || "",
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || "",
  location: "Tokyo, Japan",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/programs", label: "Programs" },
  { to: "/online-learning", label: "Online Learning" },
  { to: "/careers", label: "Careers" },
  { to: "/faqs", label: "FAQs" },
];
