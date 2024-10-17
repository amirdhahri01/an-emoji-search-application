import { PureComponent } from "react";
import "./SearchBar.css";

class SearchBar extends PureComponent {
  handleText = (e) => {
    this.props.handleChange(e);
  };
  render() {
    return (
      <>
        <div className="search-input">
          <div>
            <input
              type="text"
              className="input-text"
              placeholder="Search Emoji"
              onChange={this.handleText}
            />
          </div>
        </div>
      </>
    );
  }
}
export default SearchBar;
