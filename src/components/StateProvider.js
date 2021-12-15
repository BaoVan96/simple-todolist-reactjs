import React from "react";
import {FILTER_ALL} from './../services/filter';
import {objectWithOnly, wrapChildrenWith} from '../util/common';
import {getAll, addToList, updateStatus} from './../services/todo';
import { MODE_NONE, MODE_CREATE } from "../services/mode";

class StateProvider extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            mode: MODE_CREATE,
			list: getAll(),
			filter: FILTER_ALL,
            query: ''
		};
		this.addNew = this.addNew.bind(this);
		this.changeFilter = this.changeFilter.bind(this);
		this.changeStatus = this.changeStatus.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.searchToDo = this.searchToDo.bind(this);
	}

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    searchToDo(text) {
        this.setState({query: text || ''});
    }

    addNew(text) {
        let updatedList = addToList(this.state.list, {text, completed: false});

        this.setState({list: updatedList})
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({list: updatedList});
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'searchToDo'])
        });
        return <div>{children}</div>;
    }
}
export default StateProvider;