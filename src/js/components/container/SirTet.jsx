
import React, { Component } from "react"

class SirTet extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <a-scene>
                <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
            </a-scene>
        )
    }
}
export default SirTet;
