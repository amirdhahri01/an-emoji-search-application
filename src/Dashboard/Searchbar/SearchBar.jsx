import { PureComponent } from "react";
import "./SearchBar.css";

class SearchBar extends PureComponent {
  render() {
    const { handleChange } = this.props;
    return (
      <>
        <div className="search-input">
          <div>
            <input
              type="text"
              className="input-text"
              placeholder="Search Emoji"
              onChange={handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}
export default SearchBar;
