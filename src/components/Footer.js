/* eslint-disable no-useless-constructor */
import React from "react";
import Filter from "./Filter";
import ButtonWrapper from "./ButtonWrapper";

class Footer extends React.Component {
    constructor (props) {
        super (props);
    }

    render() {
        const {count, filter, change, mode, changeMode} = this.props;

        return (
            <footer>
                <div className="todo-footer clearfix d-flex justify-content-between">
                    <ButtonWrapper mode={mode} changeMode={changeMode} />
                    <div className="pull-left">
                        <strong>
                            <span className="count-todos">{count}</span>
                        </strong>
                        {' items left'}
                    </div>
                    <div className="pull-right">
                        <Filter filter={filter} change={change}/>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;

