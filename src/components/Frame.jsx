import { Component } from "react";
import Frame from 'react-frame-component';
import Dashboard from "./Dashboard";

class FrameComponent extends Component{
    render(){
        return(
            <div className="frame-component">
                <Frame>
                    {this.props.comp}
                </Frame>
            </div>
        )
    }
}

export default FrameComponent;