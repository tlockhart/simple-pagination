import React, { Component } from "react";
// import { useForm } from "react-hook-form";

class ComponentsRenderer extends Component {
  constructor(props) {
    super(props);
    const { component } = props;

    this.state = {
      component
    };
    
  }

  render() {
    console.log("ComponentRenderer: PROPS:", this.props);
    return (
    this.state.component()
    );
  }
}

export default ComponentsRenderer;