/* eslint-disable no-useless-constructor */
import React from "react";
import InputBox from "./InputBox";

class Header extends React.Component {
    constructor (props) {
        super (props);
    }

    render() {
        let title = this.props.title;
        return (
            <header>
                <h1>{title}</h1>
                <InputBox addNew={this.props.addNew} />
            </header>
        )
    }
}
export default Header;

