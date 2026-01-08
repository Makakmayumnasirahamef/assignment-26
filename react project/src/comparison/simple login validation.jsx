class Login extends React.Component {
  state = { email: "", password: "", message: "" };

  handleLogin = () => {
    if (!this.state.email || this.state.password.length < 6) {
      this.setState({ message: "Error: Invalid credentials" });
    } else {
      this.setState({ message: "Success" });
    }
  };

  render() {
    return (
      <div>
        <input placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
        <input
          type="password"
          placeholder="Password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button onClick={this.handleLogin}>Login</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}