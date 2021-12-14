/* eslint-disable no-useless-constructor */
import React from "react";
import Filter from "./Filter";

class Footer extends React.Component {
    constructor (props) {
        super (props);
    }

    render() {
        let count = this.props.count;
        return (
            <div className="todo-footer clearfix">
                <div className="pull-left">
                    <strong>
                        <span className="count-todos">{count}</span>
                    </strong>
                    {' items left'}
                </div>
                <div className="pull-right">
                    <Filter filter={this.props.filter} change={this.props.change}/>
                </div>
            </div>
        )
    }
}
export default Footer;

