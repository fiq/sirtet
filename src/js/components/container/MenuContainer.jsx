import React, { Component } from "react"
import { Dropdown } from "react-bulma-components"
import 'react-bulma-components/dist/react-bulma-components.min.css';
//FIXME - split out the dumb component
class MenuContainer extends Component {

    constructor(props) {
        super(props);
    }

    // TODO - redux it
    onChange(game_mode) {
        this.setState({ game_mode })
    }

    render() {
        return (
            <Dropdown onChange={this.onChange} color="danger" {...this.props}>
                <Dropdown.Item value="play">Play</Dropdown.Item>
                <Dropdown.Item value="pause">Pause</Dropdown.Item>
                <Dropdown.Item value="ended">End Game</Dropdown.Item>
            </Dropdown>
        )
    }
}

export default MenuContainer;   