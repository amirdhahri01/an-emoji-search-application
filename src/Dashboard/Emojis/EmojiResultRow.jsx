import { PureComponent } from "react";
class EmojiResultRow extends PureComponent {
  render() {
    const { title, symbol } = this.props;
    return (
      <>
        <div>
          <span className="symbol">{symbol}</span>
          <span className="title">{title}</span>
          <span className="info">Click to Copy </span>
        </div>
      </>
    );
  }
}

export default EmojiResultRow;
