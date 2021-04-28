import "./index.scss"
import mainImg1 from '../img/mainImg.jpg'

const EN1 = "Your Restaurant Branding Partner"
const CN1 = "您的餐厅"
const CN2 = "品牌策略"
const CN3 = "伙伴"


const MainImg = ({isChinese}) => {
    return <section className="mainImgRoot">
    <img alt="" className="mainImg" src={mainImg1}></img>
    <div className="mainImg-textWrapper">
      <div className="mainImg-textInnerWrapper">
        {isChinese 
          ? <h1 className="text">{CN1} {CN2} {CN3}</h1> 
          : <h1 className="text">{EN1}</h1>
        }
        <h4 className="text"> It’s what we do every day. Here’s how. </h4>
      </div>
    </div>
  </section>
}

export default MainImg