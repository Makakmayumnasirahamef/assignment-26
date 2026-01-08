class Todo extends React.Component {
  state = { items: [], input: "" };

  addItem = () => {
    if (this.state.input)
      this.setState({
        items: [...this.state.items, this.state.input],
        input: ""
      });
  };

  deleteItem = index => {
    this.setState({
      items: this.state.items.filter((_, i) => i !== index)
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={e => this.setState({ input: e.target.value })} />
        <button onClick={this.addItem}>Add</button>

        {this.state.items.length === 0 && <p>No items</p>}

        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>
              {item} <button onClick={() => this.deleteItem(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}