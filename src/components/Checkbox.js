/* eslint-disable no-useless-constructor */
import React from "react";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {checked} = e.target;
        this.setState({checked});
        this.props.changeStatus(checked);
    }

    render() {
        return <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} id={this.props.id} />;
    }
}
export default Checkbox;