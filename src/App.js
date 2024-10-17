import { PureComponent } from "react";
import "./App.css";
import EmojiResults from "./Dashboard/Emojis/EmojiResults";
import Header from "./Dashboard/Header/Header";
import SearchBar from "./Dashboard/Searchbar/SearchBar";
import Filter from "./Dashboard/Emojis/Filter";
class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };
  handleChange = (e) => {
    this.setState({
      filteredEmojis: Filter(e.target.value, 15),
    });
  };
  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}

export default App;
