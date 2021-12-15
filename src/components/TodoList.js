/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter, search} from './../services/filter';

class TodoList extends React.Component {
    render() {
        const {list, filter, mode, query} = this.props.data;
        const {addNew, changeFilter, changeStatus, changeMode, searchToDo} = this.props.actions;
        const filteredItems = search(applyFilter(list, filter), query);

        return (
            <div className="todolist">
                <Header {...{addNew, mode, query, searchToDo}}/>
                <FilteredList filteredItems={filteredItems} changeStatus={changeStatus} />
                <Footer changeMode={changeMode} count={filteredItems.length} filter={filter} change={changeFilter} mode={mode} />
            </div>
        )
    }
}

export default TodoList;