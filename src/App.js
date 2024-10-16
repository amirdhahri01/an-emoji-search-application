import { PureComponent } from "react";
import "./App.css";
import EmojiResults from "./Dashboard/Emojis/EmojiResults";
import Header from "./Dashboard/Header/Header";
import SearchBar from "./Dashboard/Searchbar/SearchBar";
class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
