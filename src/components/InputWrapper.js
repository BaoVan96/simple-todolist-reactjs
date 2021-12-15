/* eslint-disable eqeqeq */
import React from "react";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";
import InputBox from "./InputBox";
import Searchbox from "./Searchbox";

class InputWrapper extends React.Component {
    render() {
        const {mode, addNew, query, searchToDo} = this.props;
        switch (mode) {
            case MODE_CREATE:
                return <InputBox {...{addNew}}/>;
    
            case MODE_SEARCH:
                return <Searchbox {...{query, searchToDo}}/>;
    
            default:
                return null;
        }
    }
}
export default InputWrapper;