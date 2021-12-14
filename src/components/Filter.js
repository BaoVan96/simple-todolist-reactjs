/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React from "react";
import { getOptions } from "../services/filter";

const options = getOptions();

class Filter extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        const change = this.props.change;
        const getClass = (key) => (key === this.props.filter ? 'selected' : '');
        return (
            <ul className="filters list-unstyled clearfix">
                {Object.keys(options).map(key => (
                    <li key={key}>
                        <a onClick={() => change(key)} className={getClass(key)}>
                            {options[key]}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}
export default Filter;