import { PureComponent } from "react";
import "./Header.css";
import CatImgae1 from "../images/grinning-cat-face-with-smiling-eyes.png";
import CatImgae2 from "../images/smiling-cat-face-with-open-mouth.png";

class Header extends PureComponent {
  render() {
    return (
      <>
        <div className="header">
          <img src={CatImgae1} alt="" />
          Emoji Search
          <img src={CatImgae2} alt="" />
        </div>
      </>
    );
  }
}

export default Header;
