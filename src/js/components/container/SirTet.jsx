
import React, { Component } from "react"
import MenuContainer from "./MenuContainer.jsx"

class SirTet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a-scene>
                <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                <MenuContainer isVisible="true" x="0" y="0" z="0"/>
            </a-scene>
        )
    }
}
export default SirTet;
