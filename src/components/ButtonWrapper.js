import React from "react";
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from "../services/mode";

class ButtonWrapper extends React.Component {
    render() {
        const {mode, changeMode} = this.props;
        const isCreateMode = () => mode === MODE_CREATE;
        const isSearchMode = () => mode === MODE_SEARCH;

        return (
            <div className="pull-left buttons">
                <a title="Add New" 
                    className={'button add ' + (isCreateMode() ? 'selected' : '')}
                    onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}></a>
                <a title="Search" 
                    className={'button search ' + (isSearchMode() ? 'selected' : '')}
                    onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}></a>
            </div>
        )
    }
}
export default ButtonWrapper;