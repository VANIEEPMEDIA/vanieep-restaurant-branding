import React, { useEffect } from "react";
import "./index.scss";

const Section = ({ content }) => {
  const { title1, title2, title3, text, img, video, price, estimate, backgroundColor } = content;
  const myRef = React.createRef();

  const Comp = video
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
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [content])
  return (
    <div className="section" style={{ backgroundColor }}>
      <div className="section one" ref={myRef}>
        <div className="inner-wrap">
          <h2 className="section-one-title">{title1}<br/>{title2}<br/>{title3}</h2>
          <p className="section-one-text">{text}</p>
          <p className="section-one-text" style={{color: "#c7a524", fontSize: "19px", marginBottom: "0px", marginTop: "30px"}}>{price}</p>
          <p className="section-one-text" style={{color: "#c7a524", fontSize: "19px"}}>{estimate}</p>
        </div>
      </div>
      {/* {video ? <video className="section video" src="video" /> :<img className="section img" src={img} loading="lazy"></img>} */}
      {video ? <Comp className="section video"/> :<img className="section img" src={img} loading="lazy"></img>}
    </div>
  );
};
export default Section;
