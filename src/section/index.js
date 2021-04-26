import React, { useEffect } from "react";
import "./index.scss";

const Section = ({ content }) => {
  const { title1, title2, text, img, backgroundColor } = content;
  const myRef = React.createRef();

  const handleScroll = () => {
    const oneEle = myRef.current
    if (oneEle && oneEle.classList.contains("one-animation")) {
      return
    }
    if (oneEle) {
      const oneEleTop = oneEle.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 2
  
      if (oneEleTop < screenPosition) oneEle.classList.add("one-animation")
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="section" style={{ backgroundColor }}>
      <div className="section one" ref={myRef}>
        <div className="inner-wrap">
          <h2 className="section-one-title">{title1}<br/>{title2}</h2>
          <p className="section-one-text">{text}</p>
        </div>
      </div>
      <img className="section img" src={img} loading="lazy"></img>
    </div>
  );
};
export default Section;
