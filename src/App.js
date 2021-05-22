import React, { useEffect } from "react";
import "./App.scss";
import Header from "./header";
import Body from "./body";
import Section from "./section";
import MainImg from "./mainImg";
import Social from "./social";
import socialMedia from "./img/social-media.jpg";
import video from "./img/video.jpg";
import menu from "./img/menu.jpg";
import logo from "./img/logo.jpg";
import website from "./img/web.jpg";
import strawberrywater from "./img/strawberrywater.jpg";
import project1en from "./img/project1en.png";
import project1cn from "./img/project1cn.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import wechatQr from "./img/wechat-qr.jpg";
import emailQr from "./img/email-qr.jpg";
import meif101 from "./img/meif101.mp4";
import MSwitch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Video = ({ className }) => {
  return (
    <iframe
      className={className}
      width="60%"
      height="595"
      src="https://www.youtube.com/embed/-FEt3Vmm78U?start=35&end=55"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
let content = [
  {
    title1: "Photo",
    // title2: "& Video",
    text: `We specialize in food photography and lighting because we know that customers make their dining decisions based on exceptional and enticing photos. Our customized photo shoots will create the best photos for your restaurant and attract customers to your website and all social media channels.`,
    price: "Pricing starts at $2800",
    estimate: "Contact us for a free estimate",
    img: strawberrywater,
    backgroundColor: "#f7f7f7",
  },
  {
    title1: "Video",
    // title2: "& Printing",
    text: `Video can be a powerful way to share your story, bring in customers and get the attention of media outlets. We recommend that you book video shoots as soon as needed or schedule mini shoots so that you may feed the social media beast and grow your following.`,
    img: video,
    price: "Pricing starts at $5000",
    estimate: "Contact us for a free estimate",
    // video: "https://youtu.be/-FEt3Vmm78U",
    // video: Video,
    backgroundColor: "white",
  },
  {
    title1: "Logo and Naming",
    // title2: "& Development",
    text:
      "Creating a logo for your restaurant is the best way to start building a unique brand identity. Naming your restaurant properly also sparks curiosity for knowing more, learning, and engaging with the brand. We can design your restaurant logo, create the name of your new restaurant as well as invent creative menu items that will strengthen your unique restaurant brand.",
    img: logo,
    price: "Pricing starts at $2000",
    estimate: "Contact us for a free estimate",
    backgroundColor: "#f7f7f7",
  },
  {
    title1: "Menu, Poster Design",
    title2: "& Printing",
    text:
      "A good restaurant menu design is a key component to any restaurant. Posters are effective in promoting your business and will increase your visibility, brand recognition and send out a compelling call to action to your customers.  We are honored to offer menu and poster design services with high quality printing.",
    img: menu,
    price: "Pricing starts at $1200",
    estimate: "Contact us for a free estimate",
    backgroundColor: "white",
  },
  {
    title1: "Website Design",
    title2: "& Development",
    text:
      "Websites are a key marketing tool that is significant to getting potential customers to learn about your restaurant.  It is also important for existing customers to stay connected through regular updates about the menu or ongoing promotions.  With our custom website maintenance packages, we will work with you to keep your website up to date.",
    price: "Pricing starts at $5600",
    estimate: "Contact us for a free estimate",
    img: website,
    backgroundColor: "#f7f7f7",
  },
  {
    title1: "Social Media",
    title2: "& Marketing",
    text:
      "Social media is a clear and consistent digital marketing tool to successfully promote your restaurant. Our digital marketing capabilities include social media management, content creation, social media ads and paid search management. ",
    price: "Pricing starts at $3500",
    estimate: "Contact us for a free estimate",
    img: socialMedia,
    backgroundColor: "white",
  },
];

const contentCN = [
  {
    title1: "产品摄影",
    // title2: "& 视频",
    text: `我们会为您的餐厅拍摄最专业的，富有创意和美感的菜品图片，因为我们知道很多时候您的客人下单的关键取决于菜品图片的质量和诱人程度。 我们会为您客制化菜品拍摄，从而满足您餐厅品牌宣传及使用的所有需求。这些图片将会为您的品牌网站，社交媒体，营销以及广告宣传带来更多的品牌魅力。`,
    price: "价格$2800起",
    estimate: "请联系我们做一个免费的估价",
    img: strawberrywater,
    backgroundColor: "#f7f7f7",
  },
  {
    title1: "视频拍摄",
    // title2: "& 打印",
    text: `拍摄宣传视频是一个强而有力的方法去分享您的餐厅故事，为您餐厅品牌的社交媒体带来更多的关注度。我们诚挚建议您预订我们的视频拍摄服务，或者预订一次微视频拍摄，并利用充满吸引力的宣传视频来增加您餐厅社交媒体的粉丝量。 `,
    price: "价格$5000起",
    estimate: "请联系我们做一个免费的估价",
    img: video,
    backgroundColor: "white",
  },
  {
    title1: "商标设计",
    title2: "和品牌命名",
    text:
      "为自己的餐厅品牌设计一个合适的商标是一个最好的方法去建立起自己独特的品牌形象。很好地命名您的餐厅品牌，也会引起大众对于这个餐厅品牌更多的兴趣，它对于一个品牌形象的建立起到很大的作用。我们为您的新餐厅提供商标设计，品牌命名的服务以及菜单餐品命名服务去更好地帮助您的餐厅品牌成长。",
    price: "价格$2000起",
    estimate: "请联系我们做一个免费的估价",
    img: logo,
    backgroundColor: "#f7f7f7",
  },
  {
    title1: "菜单，海报",
    title2: "设计",
    title3: "及印刷",
    text:
      "优秀的菜单设计对每一个餐厅来说都是很重要的一部分。宣传海报也可以很高效地帮助您的餐厅提高曝光度和知名度以及带来更多的订单，是一种很有用的餐厅宣传手段，不要错过这个宣传自己餐厅品牌的好机会。我们很荣幸为您提供菜单设计，海报设计以及高品质印刷服务。 ",
    price: "价格$1200起",
    estimate: "请联系我们做一个免费的估价",
    img: menu,
    backgroundColor: "white",
  },
  {
    title1: "网站设计",
    title2: "和开发",
    text:
      "餐厅网站在吸引更多潜在顾客和维系老顾客，让他们及时知道您的餐厅出的新品或新的优惠活动方面是一个非常重要的营销工具。如果您搭配上我们的网站管理服务，我们会及时，持续地更新您的网站。",
    price: "价格$5600起",
    estimate: "请联系我们做一个免费的估价",
    img: website,
    backgroundColor: "#f7f7f7",
  },
  {
    title1: "社交网络",
    title2: "和市场营销",
    text:
      "社交网络在宣传您的餐厅方面是一个很清晰明了和稳定的市场营销平台。我们的数字化营销团队可以为您管理社交媒体，定期制作社交媒体内容，发布社交媒体广告，以及一些付费的搜索工具管理。",
    price: "价格$3500起",
    estimate: "请联系我们做一个免费的估价",
    img: socialMedia,
    backgroundColor: "white",
  },
];

const Translation = ({ isChinese, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <MSwitch
          checked={isChinese}
          onChange={handleChange}
          color="primary"
          name="translation"
          inputProps={{ "aria-label": "translation" }}
        />
      }
      label={"中文"}
    />
  );
};
const HomeRoute = ({ handleChange, _c, isChinese }) => {
  return (
    <div className="app">
      <Header>
        <Translation handleChange={handleChange} isChinese={isChinese} />
      </Header>
      <MainImg isChinese={isChinese} />
      <Body isChinese={isChinese} />
      {_c.map((c, i) => (
        <Section key={i} content={c} />
      ))}
      <Social />
      <Link to="project" className="project1">
        <img
          loading="lazy"
          src={isChinese ? project1cn : project1en}
          alt="project"
        ></img>
      </Link>
    </div>
  );
};

function App() {
  const [isChinese, setState] = React.useState(false);
  const handleChange = () => {
    setState(!isChinese);
  };

  const _c = isChinese ? contentCN : content;
  let refP;
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomeRoute
              isChinese={isChinese}
              handleChange={handleChange}
              _c={_c}
            />
          </Route>
          <Route exact path="/project">
            <div className="project-1-root">
              {/* <div className="project-1-root-video"> */}
              {/* <iframe
                src="https://player.vimeo.com/video/548271438?autoplay=1&loop=1&autopause=0&muted=1&sidedock=0&controls=0&title=0&transparent=0"
                width="100%"
                // height="360"
                // height="100vh"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullscreen
              ></iframe> */}
              <div className="translation">

                      <Translation handleChange={handleChange} isChinese={isChinese} />
              </div>
              <div className="video-meif">
                <video autoplay="true" loop={true} muted={true} webkitPlaysInline webkit-playsinline playsinline playsInline>
                  <source src={meif101} type="video/mp4"></source>
                  Your browser does not support the video tag.
                </video>
                <button
                  className="click-to-scroll"
                  onClick={(e) => {
                    refP &&
                      refP.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  SEE MORE
                </button>
              </div>

              {/* </div> */}
              {/* <img src={projectImg} style={{width: "100%"}}></img> */}
              <div className="p-content" ref={(r) => (refP = r)}>
                <div>
                  <br></br>
                  {!isChinese ? (
                    <p className="big">To Our Valued Clients:</p>
                  ) : (
                    <p className="big">致我们最尊贵的客户，</p>
                  )}

                  <br></br>

                  {!isChinese ? (
                    <p>
                      We are honored to announce that effective June 2021, we
                      will launch our “100 Trendy Restaurants Project”
                    </p>
                  ) : (
                    <p>
                      我们很荣幸地宣布自2021年6月起，我们的新项目“百家网红餐厅计划”正式启动。
                    </p>
                  )}
                  <br></br>

                  {!isChinese ? (
                    <p>
                      Making 100 restaurants the hottest and trendiest in the
                      business is our mission. We will customize your restaurant
                      branding package and offer a variety of services such as
                      photos, videos, menu, poster designs, website development,
                      advertising and social media marketing.
                    </p>
                  ) : (
                    <p>
                      参与创造100间最火网红餐厅是我们这个项目的任务。我们会为您的餐厅制定个性化品牌包装项目，服务内容涵盖：图片，视频，菜单，海报，网页，广告投放，社交媒体等。
                    </p>
                  )}
                  <br></br>

                  {!isChinese ? (
                    <div>
                      <p>
                        We would be pleased to have the opportunity to work with
                        you soon. Please feel free to contact us for more
                        information.
                      </p>
                    </div>
                  ) : (
                    <p>
                      我们非常期待尽快与您合作。请随时联系我们了解更多项目资讯。
                    </p>
                  )}
                  <br></br>
                  <br></br>
                  {!isChinese ? (
                    <p>Limited Time Offer：</p>
                  ) : (
                    <p>限时优惠计划:</p>
                  )}
                  <br></br>

                  {!isChinese ? (
                    <p>
                      20% off on your branding package through the end of 2022
                    </p>
                  ) : (
                    <p>
                      在2022年底前签订合作计划的商家，我们会为您提供八折优惠。
                    </p>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "40px",
                    }}
                  >
                    <img
                      src={wechatQr}
                      style={{ width: "100px", height: "100px" }}
                    ></img>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img src={emailQr} style={{ width: "100px" }}></img>
                      <div>email/邮箱</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="filter"></div> */}
              {/* <div className="square"></div>
              <div className="circle"></div> */}
            </div>
          </Route>
          <Route path="*">
            <HomeRoute
                isChinese={isChinese}
                handleChange={handleChange}
                _c={_c}
              />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
