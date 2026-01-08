import React from "react";

class CharacterCounter extends React.Component {
  state = { text: "" };

  render() {
    const count = this.state.text.length;
    return (
      <div>
        <input
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <p>Characters: {count}</p>
        <p>Remaining: {100 - count}</p>
        {count > 100 && <p style={{ color: "red" }}>Limit exceeded!</p>}
      </div>
    );
  }
}