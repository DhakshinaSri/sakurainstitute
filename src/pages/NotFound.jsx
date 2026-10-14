import useSeo from "../hooks/useSeo.js";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  useSeo({
    title: "Page not found | Sakura Language & Career Institute",
    description: "The page you are looking for could not be found.",
    path: "/404",
    noindex: true,
  });
  return (
    <section className="section notfound">
      <div className="container container--narrow center">
        <p className="notfound__code" aria-hidden="true">404</p>
        <h1>This page could not be found</h1>
        <p className="lead">The page may have moved or the address may be incorrect. Let's get you back on track.</p>
        <div className="hero__actions hero__actions--center">
          <Button to="/" variant="primary" arrow>Back to Home</Button>
          <Button to="/courses" variant="outline">Explore Courses</Button>
        </div>
      </div>
    </section>
  );
}
