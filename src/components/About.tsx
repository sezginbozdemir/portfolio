import React, { useEffect, useState } from "react";
import Hello from "./Hello";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { BsFillCloudDownloadFill } from "react-icons/bs";

function About() {
  const [text, setText] = useState("");
  const fullText = " I'M SEZGIN";
  const typingSpeed = 200;
  const [visibleText, setVisibleText] = useState("");
  const paragraphFullText =
    "I’m a self-taught full-stack developer passionate about creating user-friendly, impactful applications. I love understanding client needs and building solutions that are reliable and easy to maintain. I’m excited to bring my skills, curiosity, and adaptability to the next big opportunity and can’t wait to see where my journey in tech takes me next!";

  const wordDelay = 150;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleText.length < paragraphFullText.length) {
      const timeoutId = setTimeout(() => {
        setVisibleText(paragraphFullText.slice(0, visibleText.length + 10));
      }, 100); // Faster typing speed for paragraph
      return () => clearTimeout(timeoutId);
    }
  }, [visibleText]);
  return (
    <div className="about">
      <div className="welcome-container">
        <Hello />
        <div className="typing-effect">
          {text}
          <span className="cursor">|</span>
        </div>
        <p className="animated-paragraph fade-in">{visibleText}</p>
        <a href="/SEZ_CV.pdf" download="SEZ_CV.pdf">
          <button>
            <BsFillCloudDownloadFill /> Download CV
          </button>
        </a>
      </div>
      <div className="animation">
        <Lottie animationData={animationData} autoplay={true} />
      </div>
    </div>
  );
}

export default About;
