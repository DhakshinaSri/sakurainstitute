import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";

// Secondary pages are code-split for a faster first load.
const About = lazy(() => import("./pages/About.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const Programs = lazy(() => import("./pages/Programs.jsx"));
const OnlineLearning = lazy(() => import("./pages/OnlineLearning.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const FAQs = lazy(() => import("./pages/FAQs.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <Suspense fallback={<div className="page-loading" role="status">Loading…</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="programs" element={<Programs />} />
          <Route path="online-learning" element={<OnlineLearning />} />
          <Route path="careers" element={<Careers />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
