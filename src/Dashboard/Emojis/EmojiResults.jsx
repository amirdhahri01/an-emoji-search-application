import { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow";

class EmojiResults extends PureComponent {
  render() {
    const [emojiData] = this.props;
    console.log(emojiData);

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
