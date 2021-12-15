/* eslint-disable no-useless-constructor */
import React from "react";
import InputWrapper from "./InputWrapper";

class Header extends React.Component {
    constructor (props) {
        super (props);
    }

    render() {
        const {addNew, mode, query, searchToDo} = this.props;
        return (
            <header>
                <h1>Thing To Dos</h1>
                <InputWrapper {...{addNew, mode, query, searchToDo}}/>
            </header>
        )
    }
}
export default Header;

