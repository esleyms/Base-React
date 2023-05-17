import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("lifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifegetDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ifegetDerivedStateFromProps");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleaB componentDidUpdate");
  }
  render() {
    console.log("LLifecycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
