class Tabs extends React.Component {
  state = { activeTab: "Home" };

  renderContent() {
    return <h3>{this.state.activeTab} Content</h3>;
  }

  render() {
    return (
      <div>
        {["Home", "About", "Contact"].map(tab => (
          <button key={tab} onClick={() => this.setState({ activeTab: tab })}>
            {tab}
          </button>
        ))}
        {this.renderContent()}
      </div>
    );
  }
}