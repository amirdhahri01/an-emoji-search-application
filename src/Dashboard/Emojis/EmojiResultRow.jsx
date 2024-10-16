import { PureComponent } from "react";
import "./EmojiResultRow.css";
class EmojiResultRow extends PureComponent {
  render() {
    const { title, symbol } = this.props;
    return (
      <>
        <div className="component-emoji-result-row">
          <span className="symbol">{symbol}</span>
          <span className="title">{title}</span>
          <span className="info">Click to Copy </span>
        </div>
      </>
    );
  }
}

export default EmojiResultRow;
