import './index.css';

const Body = ({isChinese}) => {
  const EN = ["We've got everything you need", "We're a dedicated team of designers, writers, photographers and marketing strategists who share a common passion for restaurant branding."]
  const CN = ["我们提供给您一切所需", "我们是一个专注于做餐厅品牌包装的团队，我们团队拥有自己的平面设计师，文案作者，摄影师，摄像师，以及专业的市场策略专家。"]
  const content = isChinese ? CN : EN
  return 
    <div className="body-section">
      <h3 className="body-section one">{content[0]}</h3>
      <p className="body-section sec">
        <div className="body-section-inner-wrap">
          <div className="body-section-line"></div>
          <p className="body-section-p">{content[1]}</p>
        </div>
      </p>
    </div>
  );
};

export default Body;
