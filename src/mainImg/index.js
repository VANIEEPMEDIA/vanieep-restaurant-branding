import "./index.scss"
import mainImg from '../img/restaurant-and-caf4.jpg'
// import kiwi from '../img/kiwi-long.jpg'
import mainImg1 from '../img/pexels-olya-kobruseva-6507004.jpg'

const EN1 = "Your Restaurant Branding Partner"
const CN1 = "你的餐厅品牌策略伙伴"
const CN2 = "品牌策略伙伴"

const MainImg = ({isChinese}) => {
    const _T1 = isChinese ? CN1 : EN1
    return <section className="mainImgRoot">
    <img alt="" className="mainImg" src={mainImg1}></img>
    <div className="mainImg-textWrapper">
      <div className="mainImg-textInnerWrapper">
        <h1 className="text">{_T1}</h1>
        <h4 className="text"> It’s what we do every day. Here’s how. </h4>
      </div>
    </div>
  </section>
}

export default MainImg