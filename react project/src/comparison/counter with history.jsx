class CounterHistory extends React.Component {
  state = { count: 0, history: [] };

  updateCount = val => {
    this.setState(prev => ({
      count: prev.count + val,
      history: [...prev.history, prev.count + val].slice(-5)
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.updateCount(1)}>+</button>
        <button onClick={() => this.updateCount(-1)}>-</button>
        <ul>
          {this.state.history.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>
    );
  }
}