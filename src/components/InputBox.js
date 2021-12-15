/* eslint-disable eqeqeq */
import React from "react";

class InputBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: props.value || ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    clear() {
        this.setState({value: ''});
    }

    handleKeyUp(e) {
        const {addNew} = this.props;
        const text = this.state.value.trim();

        if (e.keyCode == 13) {
            addNew(text);    
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <input type="text" autoFocus
                 className="form-control add-todo" 
                 placeholder="Add New" 
                 onChange={this.handleChange}
                 onKeyUp={this.handleKeyUp}
                 value={this.state.value}
                 />
        )
    }
}
export default InputBox;