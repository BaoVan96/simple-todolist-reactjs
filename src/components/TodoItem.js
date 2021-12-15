/* eslint-disable no-useless-constructor */
import React from "react";
import Checkbox from "./Checkbox";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.data;
        const handleChange = (checked) => this.props.changeStatus(item.id, checked);
        return (
            <li key={item.id} className={item.completed ? 'ui-state-default completed' : 'ui-state-default'}>
                <div className="checkbox">
                    <Checkbox changeStatus={handleChange} id={item.id} checked={item.completed} />
                    <label htmlFor={item.id}>{item.text}</label>
                </div>
            </li>
        )
    }
}

export default TodoItem;