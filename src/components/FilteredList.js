import React from "react";
import TodoItem from "./TodoItem";

class FilteredList extends React.Component {
    render() {
        const filteredItems =this.props.filteredItems;
        return (
            <ul className="list-unstyled">
                {filteredItems.length > 0
                    ? (
                        <ul className="list-unstyled">
                            {filteredItems.map(item => <TodoItem changeStatus={this.props.changeStatus} key={item.id} data={item}/>)}
                        </ul>
                    )
                    : <p className="alert alert-info">There are no items.</p>
                }
            </ul>   
        )
    }
}
export default FilteredList;