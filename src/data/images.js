import hero640 from "../assets/images/hero-640.webp";
import hero1100 from "../assets/images/hero-1100.webp";
import about640 from "../assets/images/about-640.webp";
import about1000 from "../assets/images/about-1000.webp";
import overview640 from "../assets/images/course-overview-640.webp";
import overview1000 from "../assets/images/course-overview-1000.webp";
import n5s from "../assets/images/n5-480.webp";
import n5l from "../assets/images/n5-800.webp";
import n4s from "../assets/images/n4-420.webp";
import n4l from "../assets/images/n4-640.webp";
import n3s from "../assets/images/n3-420.webp";
import n3l from "../assets/images/n3-640.webp";
import n2s from "../assets/images/n2-480.webp";
import n2l from "../assets/images/n2-800.webp";

const img = (small, sw, large, lw, width, height, alt) => ({
  src: large,
  srcSet: `${small} ${sw}w, ${large} ${lw}w`,
  width,
  height,
  alt,
});

/**
 * All site photography. To swap a picture: drop the new file into src/assets/images,
 * import it above and update the entry (keep width/height = the file's real size to avoid layout shift).
 */
export const IMAGES = {
  hero: img(hero640, 640, hero1100, 1100, 1713, 906,
    "A smiling Japanese trainer with a headset teaching hiragana on a whiteboard during a live online class"),
  about: img(about640, 640, about1000, 1000, 1660, 935,
    "A trainer pointing at the whiteboard while a small group of learners follows a Japanese lesson"),
  courseOverview: img(overview640, 640, overview1000, 1000, 1546, 1004,
    "An open hiragana practice workbook with stroke-order guides and writing grids"),
  // JLPT level images (N1 has no image yet – add one and set `image: "n1"` in data/courses.js)
  n5: img(n5s, 480, n5l, 800, 1527, 1017,
    "A laptop showing a Basic Phrases video lesson beside Japanese study materials, an origami crane and a torii miniature"),
  n4: img(n4s, 420, n4l, 640, 1166, 1332,
    "Cover of the Practical Kanji Vol. 1 textbook for learning kanji"),
  n3: img(n3s, 420, n3l, 640, 1166, 1331,
    "Cover of a Japanese textbook on writing business documents"),
  n2: img(n2s, 480, n2l, 800, 1246, 1246,
    "A Japanese study desk with textbooks, a kanji workbook, a tea set and a laptop"),
};
