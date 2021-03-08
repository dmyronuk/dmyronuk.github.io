import React, {Component} from "react";
import initThree from "../three/init";

class Skills extends Component{
  constructor(props){
    super(props);
    this.threeContainer = React.createRef();
  }

  componentDidMount(){
    initThree(this.threeContainer.current);
  }

  render(){
    return <div
      className="flex-row justify-content-center flex-1 three-container"
      ref={this.threeContainer}
    />
  }
}

export default Skills;