import React from 'react'
import './App.scss';
import Header from './header'
import Body from './body'
import Section from './section'
import MainImg from './mainImg'
import Social from './social'
import smoothieImg from './img/smoothie.jpg'
import afternoontea from './img/afternoontea.jpg'
import kiwi from './img/kiwi.jpg'
import caf2 from './img/restaurant-and-caf2.jpg'
import caf3 from './img/restaurant-and-caf3.jpg'

let content = [
  {
    title1: "Photography",
    title2: "& Video",
    text: `Branding is at the core of everything we do. Every design, every detail, every decision—all purposefully crafted to strengthen our clients’ brands.` ,
    img: smoothieImg,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "Graphic Desing",
    title2: "& Printing",
    text: `A website is often a brand’s first and most meaningful point of interaction with its audience. We create websites and eCommerce solutions that deliver a powerful first impression.` ,
    img: afternoontea,
    backgroundColor: 'white'
  },
  {
    title1: "Website Design",
    title2: "& Development",
    text: `With sound strategy, bold thinking and award-winning creative, we deliver digital/marketing campaigns that break through the noise and connect with customers.` ,
    img: caf3,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "Social Media",
    title2: "& Marketing",
    text: `With sound strategy, bold thinking and award-winning creative, we deliver digital/marketing campaigns that break through the noise and connect with customers.` ,
    img: kiwi,
    backgroundColor: 'white'
  }
]

const contentCN = [
  {
    title1: "产品摄影",
    title2: "& 视频",
    text: `Branding is at the core of everything we do. Every design, every detail, every decision—all purposefully crafted to strengthen our clients’ brands.` ,
    img: smoothieImg,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "平面设计",
    title2: "& 打印",
    text: `A website is often a brand’s first and most meaningful point of interaction with its audience. We create websites and eCommerce solutions that deliver a powerful first impression.
    ` ,
    img: caf3,
    backgroundColor: 'white'
  },
  {
    title1: "网页设计",
    title2: "& 开发",
    text: `With sound strategy, bold thinking and award-winning creative, we deliver digital/marketing campaigns that break through the noise and connect with customers.` ,
    img: afternoontea,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "社交媒体",
    title2: "& 广告",
    text: `With sound strategy, bold thinking and award-winning creative, we deliver digital/marketing campaigns that break through the noise and connect with customers.` ,
    img: kiwi,
    backgroundColor: 'white'
  }
]

function App() {
  const [isChinese, setState] = React.useState(false);
  const handleChange = () => {
    setState(!isChinese);
  };
  const _c = isChinese ? contentCN : content 
  return (
    <div className="app">
      <Header translationClick={handleChange} isChinese={isChinese}/> 
      <MainImg isChinese={isChinese}/>
      <Body/>
      {
        _c.map((c, i) => <Section key={i} content={c} />)
      }
      <Social />
    </div>
  );
}

export default App;
