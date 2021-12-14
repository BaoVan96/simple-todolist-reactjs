/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter} from './../services/filter';

class TodoList extends React.Component {
    render() {
        const {items, filter} = this.props.data;
        const {addNew, changeFilter, changeStatus} = this.props.actions;
        const filteredItems = applyFilter(items, filter);
        return (
            <div className="todolist">
                <Header addNew={addNew} />
                <FilteredList filteredList={filteredItems} changeStatus={changeStatus} />
                <Footer count={filteredItems.length} filter={filter} change={changeFilter} />
            </div>
        )
    }
}

export default TodoList;