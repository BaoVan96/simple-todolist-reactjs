import React from "react";
import {FILTER_ALL} from './../services/filter';
import {objectWithOnly, wrapChildrenWith} from '../util/common';
import {getAll, addToList, updateStatus} from './../services/todo';

class StateProvider extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			title: "Things to do",
			items: getAll(),
			filter: FILTER_ALL
		};
		this.addNew = this.addNew.bind(this);
		this.changeFilter = this.changeFilter.bind(this);
		this.changeStatus = this.changeStatus.bind(this);
	}

    addNew(text) {
        let updatedList = addToList(this.state.items, {text, completed: false});

        this.setState({items: updatedList})
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed);

        this.setState({items: updatedList});
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus'])
        });
        console.log(children);
        return <div>{children}</div>;
    }
}
export default StateProvider;