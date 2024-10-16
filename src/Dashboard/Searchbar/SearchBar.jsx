import { PureComponent } from "react";
import "./SearchBar.css";

class SearchBar extends PureComponent {
  render() {
    return (
      <>
        <div className="search-input">
          <div>
            <input
              type="text"
              className="input-text"
              placeholder="Search Emoji"
            />
          </div>
        </div>
      </>
    );
  }
}
export default SearchBar;
