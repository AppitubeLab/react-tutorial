var React = require('react');
var PropTypes = require('prop-types');

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        placeholder: 'Learning React 15.5.0'
      }
    }
    update( e ) {
      this.setState({placeholder: e.target.value})
    }
  render() {
      return (
        <div>
          <h1>{this.state.placeholder}</h1>
          <input type="text" onChange={this.update.bind(this)} />
        </div>
      )
  }
}

App.propTypes = {
  class: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

App.defaultProps = {
  id: "app",
  class: "canvas"
}

export default App