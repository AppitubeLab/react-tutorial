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
          <Input update={this.update.bind(this)} />
          <Button>We <Heart /> React</Button>
        </div>
      )
  }
}

const Input = (props) => 
  <input type="text" onChange={props.update} />

const Button = (props) =>
  <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default App