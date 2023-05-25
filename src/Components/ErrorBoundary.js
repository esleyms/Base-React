import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDirivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  componentDidCatch(error, infor) {
    console.log(error)
    console.log(infor)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Somenthing went wrong</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
