import { PureComponent } from "react";
class EmojiResultRow extends PureComponent {
  render() {
    const [title, symbol] = this.props;
    // const codePointHex = symbol.codePointAt(0).toString(16);
    return (
      <>
        <div>
          <img src="" alt={title} />
          <span className="title">{title}</span>
          <span className="info">Click to Copy {symbol}</span>
        </div>
      </>
    );
  }
}

export default EmojiResultRow;
