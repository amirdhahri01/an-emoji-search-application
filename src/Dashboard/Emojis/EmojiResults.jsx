import { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow";
import ClipboardJS from "clipboard";
class EmojiResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new ClipboardJS(".copy-it");
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    const { emojiData } = this.props;
    return (
      <>
        <div className="component-emoji-results">
          {emojiData.map((emoji) => {
            return (
              <EmojiResultRow
                key={emoji.title}
                title={emoji.title}
                symbol={emoji.symbol}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default EmojiResults;
