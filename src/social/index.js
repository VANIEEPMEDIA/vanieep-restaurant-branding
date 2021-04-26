import { AiOutlineInstagram } from "react-icons/ai";
import { FaWeixin } from "react-icons/fa";
import RedbookSvg from './redbook'
import './index.scss'

const Social = () => {
  return (
    <div className="socialRoot">
      <div className="socialRoot-innerWrapper">
        <div>
          <div className="socialRoot-svg">
              <AiOutlineInstagram className="ins"/>
          </div>
          <div className="socialRoot-id"></div>
        </div>
        <div>
          <div className="socialRoot-svg">
              <FaWeixin className="weixin"/>
          </div>
          <div className="socialRoot-id">Jianaaaaa118</div>
        </div>
        <div>
          <div className="socialRoot-svg">
              <RedbookSvg className="redbook"/>
          </div>
          <div className="socialRoot-id">580069231</div>
        </div>
      </div>
    </div>
  );
};

export default Social;
