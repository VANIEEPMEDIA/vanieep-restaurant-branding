import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaWeixin } from "react-icons/fa";
import RedbookSvg from './redbook'
import './index.scss'

const Social = () => {
  return (
    <div className="socialRoot">
      <div className="socialRoot-innerWrapper">
        {/* <div className="icon-holder">
          <div className="socialRoot-svg">
              <AiOutlineInstagram className="ins"/>
          </div>
          <div className="socialRoot-id">vanieep_media</div>
        </div> */}
        <div className="icon-holder">
          <div className="socialRoot-svg">
              <FaWeixin className="weixin"/>
          </div>
          <div className="socialRoot-id">Jianaaaaa118</div>
        </div>
        {/* <div className="icon-holder">
          <div className="socialRoot-svg">
              <RedbookSvg className="redbook"/>
          </div>
          <div className="socialRoot-id">milkteahunter</div>
        </div> */}
        <a className="icon-holder" href="mailto:jiana@vanieepmedia.com">
          <div className="socialRoot-svg">
            <AiOutlineMail className="header-icon"></AiOutlineMail>
          </div>
          <span className="socialRoot-id">jiana@vanieepmedia.com</span>
        </a>
      </div>
    </div>
  );
};

export default Social;
