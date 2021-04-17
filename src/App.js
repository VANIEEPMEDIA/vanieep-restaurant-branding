import logo from './logo.svg';
import './App.css';
import mainImg from './img/restaurant-and-caf4.jpg'
import photoVideo from './img/photo-and-video.jpg'
import designImg from './img/design-menu-small.jpg'
import webDesign from './img/web-design.jpg'
import socialMedia from './img/social-media.jpg'
import photoVideoMain from './img/photo-video-main.jpg'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function App() {
  return (
    <div className="app">
      <header className="flex-center app-header">
        <div className="header-text">
          Vanieep Media 
        </div>
        <div className="icon-wrapper">
          <div className="icon-holder">
            <AiOutlinePhone className="header-icon"></AiOutlinePhone>
            <div className="header-icon-text">415-519-5133</div>
          </div>
          <div className="icon-holder">
          <AiOutlineMail className="header-icon"></AiOutlineMail>
            <div className="header-icon-text">vanieepmedia@gmail.com</div>
          </div>
        </div>
      </header>
      <section className="center-holder slogan">
        <img className="main-img" src={mainImg}></img>
        <div className="main-img-text-holder">
          <div className="flex-center">
          </div>
        </div>
        <div className="main-img-text"> YOUR RESTAURANT </div>
        <div className="main-img-text main-img-text-bottom"> BRANDING PARTNER </div>
      </section>
      <section className="section-title">Our Services</section>
      <div className="card-layout">
        <div className="card">
          <img className="card-img" src={photoVideo}></img>
          <div className="card-text">Photo & Video</div>
        </div>
        <div className="card">
          <img className="card-img" src={designImg}></img>
          <div className="card-text">Gragphic Design</div>
        </div>
        <div className="card">
          <img className="card-img" src={webDesign}></img>
          <div className="card-text">Web Design</div>
        </div>
        <div className="card">
          <img className="card-img" src={socialMedia}></img>
          <div className="card-text">Social Media Marketing</div>
        </div>
      </div> 
      <div className="text-content-layout">
        <div className="layout-item">
          <img src={photoVideoMain}></img>
          <div className="layout-filter">
            <div className="layout-filter-holder">
              <div className="layout-item-text">Photo & Video</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
