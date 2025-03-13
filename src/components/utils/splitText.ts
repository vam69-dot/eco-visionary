
import { SplitText } from "gsap-trial/SplitText";

const setSplitText = () => {
  try {
    const splitTexts = document.querySelectorAll(".split-text");
    splitTexts.forEach((text) => {
      new SplitText(text, { type: "words,chars", charsClass: "char" });
    });
  } catch (error) {
    console.error("Error in setSplitText:", error);
  }
};

export default setSplitText;
