class ThemeToggle extends React.Component {
  state = { theme: "light" };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  };

  render() {
    const style = {
      background: this.state.theme === "light" ? "#fff" : "#333",
      color: this.state.theme === "light" ? "#000" : "#fff",
      padding: "20px"
    };

    return (
      <div style={style}>
        <button onClick={this.toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
}