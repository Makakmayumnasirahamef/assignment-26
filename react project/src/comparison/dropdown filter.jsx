import React from 'react';

class DropdownFilter extends React.Component {
  state = {
    filter: "All",
    products: ["Phone", "Laptop", "Tablet", "TV"]
  };

  render() {
    const filtered =
      this.state.filter === "All"
        ? this.state.products
        : this.state.products.filter(p => p.startsWith("T"));

    return (
      <div>
        <select onChange={e => this.setState({ filter: e.target.value })}>
          <option>All</option>
          <option>Starts with T</option>
        </select>

        <ul>
          {filtered.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    );
  }
}