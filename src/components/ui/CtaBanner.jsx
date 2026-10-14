import Button from "./Button.jsx";

export default function CtaBanner({
  title = "Start your Japanese language journey with Sakura today!",
  text = "Whether you are enrolling your child, preparing for the JLPT, or learning Japanese for your future career, we are here to help you find the right course.",
}) {
  return (
    <section className="cta-banner on-dark" aria-labelledby="cta-title">
      <div className="container cta-banner__inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p className="lead lead--light">{text}</p>
        </div>
        <div className="cta-banner__actions">
          <Button to="/contact?type=counselling" variant="yellow" size="lg" arrow>
            Book a Free Counselling Session
          </Button>
          <Button to="/contact" variant="outline-light" size="lg">
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
}
