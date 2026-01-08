class Timer extends React.Component {
  state = { seconds: 0 };

  render() {
    return (
      <div>
        <h2>{this.state.seconds}</h2>
        <button onClick={() => this.setState({ seconds: this.state.seconds + 1 })}>+1</button>
        <button onClick={() => this.setState({ seconds: this.state.seconds - 1 })}>-1</button>
        <button onClick={() => this.setState({ seconds: 0 })}>Reset</button>
      </div>
    );
  }
}