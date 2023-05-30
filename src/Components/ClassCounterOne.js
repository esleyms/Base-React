import React, { Component } from 'react';

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `Clicado ${this.state.count} vezes`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Clicado ${this.state.count} vezes`;
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}>
          Clique {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;




