import React from 'react'
import './App.scss';
import Header from './header'
import Body from './body'
import Section from './section'
import MainImg from './mainImg'
import Social from './social'
import socialMedia from './img/social-media.jpg'
import video from './img/video.jpg'
import menu from './img/menu.jpg'
import logo from './img/logo.jpg'
import website from './img/web.jpg'
import strawberrywater from './img/strawberrywater.jpg'

const Video = ({className}) => {
  return <iframe className={className} width="60%" height="595" src="https://www.youtube.com/embed/-FEt3Vmm78U?start=35&end=55" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}
let content = [
  {
    title1: "Photo",
    // title2: "& Video",
    text: `We offer professional, creative photo shoots to perfectly fit your restaurant’s needs which will bring attraction to your website, social media, marketing, and advertising. ` ,
    img: strawberrywater,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "Video",
    // title2: "& Printing",
    text: `Video can be a powerful way to share your story, bring in customers and get the attention of media outlets. We recommend you to book video shoots as needed or schedule mini shoots to feed the social media beast and grow your following.` ,
    img: video,
    // video: "https://youtu.be/-FEt3Vmm78U",
    // video: Video,
    backgroundColor: 'white'
  },
  {
    title1: "Logo and Naming",
    // title2: "& Development",
    text: "Creating a logo for your restaurant is the best way to start building a unique brand identity. Naming your restaurant properly also sparks curiosity for knowing more, learning, and engaging with the brand.We offer to design your restaurant logo, and create the name of your new restaurant, and menu items to help you identify your restaurant brand.",
    img: logo,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "Menu, Poster Design",
    title2: "& Printing",
    text: "A good restaurant menu design is a key component to any restaurant. Posters are effective in promoting your business. Don’t miss out on this opportunity to advertise your restaurant business as they can help increase your visibility, recognition, and send out an efficient call to action. We are honor to offer the menu design, poster design and high quality printing services. ",
    img: menu,
    backgroundColor: 'white'
  },
  {
    title1: "Website Design",
    title2: "& Development",
    text: "Websites are a key marketing tool significant to getting potential customers to learn more about your restaurant, and existing customers to connect with your restaurant. With our custom website maintenance packages, we work with you to keep your website up to date.",
    img: website,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "Social Media",
    title2: "& Marketing",
    text: "Social media is a clear and consistent digital marketing tool to successfully promote your restaurant. Our digital marketing capabilities include social media management and content creation, social media ads, and paid searching management.",
    img: socialMedia,
    backgroundColor: 'white'
  },
]

const contentCN = [
  {
    title1: "产品摄影",
    // title2: "& 视频",
    text: `我们会拍摄最专业的，富有创意的产品图片去满足您餐馆品牌宣传及使用的所有需求。这些图片将会为您的餐厅品牌网站，社交媒体，营销以及广告宣传带来更的品牌魅力。` ,
    img: strawberrywater,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "宣传视频拍摄",
    // title2: "& 打印",
    text: `拍摄宣传视频是一个很有力量的方法去分享您的餐厅故事，为您的餐厅品牌社交媒体带来更多的关注度。我们诚挚建议您预定我们的视频拍摄服务，或者预定一次微视频试拍，并用有吸引力的宣传视频来增加您餐厅社交媒体的粉丝量。 `,
    img: video,
    backgroundColor: 'white'
  },
  {
    title1: "商标设计",
    title2: "和品牌命名",
    text: "为自己的餐厅品牌做一个好的商标是一个最好的方法去建立起自己独特的品牌形象。很好地命名您的餐厅品牌，会引起大众对于这个餐厅品牌更多的兴趣，它对于一个品牌形象的建立有很大的作用。我们为您的新餐厅提供商标设计，品牌命名的服务以及菜单餐品命名服务去更好地帮助您的餐厅品牌成长。",
    img: logo,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "菜单，海报",
    title2: "设计",
    title3: "及印刷",
    text: "优秀的餐厅菜单设计对每一个餐厅来说都是很重要的一部分。海报可以很高效地帮助您的餐厅提高曝光度和知名度以及带来更多的订单，是一种很有用的餐厅宣传手段，不要错过这个宣传自己餐厅品牌的好机会。我们很荣幸为您提供菜单设计，海报设计以及高品质印刷服务。 ",
    img: menu,
    backgroundColor: 'white'
  },
  {
    title1: "网站设计",
    title2: "和开发",
    text: "餐厅网站在吸引潜在新客源和维系老顾客方面是一个非常重要的市场工具。如果您搭配上我们的网站管理服务，我们会帮助持续更新您的网站。",
    img: website,
    backgroundColor: '#f7f7f7'
  },
  {
    title1: "社交网络",
    title2: "和市场营销",
    text: "社交网络在宣传您的餐厅方面是一个很清晰明了和稳定的市场营销平台。我们的数字化营销团队可以为您管理社交媒体，定期制作社交媒体内容，发布社交媒体广告，以及一些付费的搜索工具管理。",
    img: socialMedia,
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
      <Body isChinese={isChinese} />
      {
        _c.map((c, i) => <Section key={i} content={c} />)
      }
      <Social />
    </div>
  );
}

export default App;
