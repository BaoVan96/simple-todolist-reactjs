import React from "react";

class Searchbox extends React.Component {
    render() {
        const {query, searchToDo} = this.props;
        return (
            <input
                type="text"
                className="form-control search"
                value={query}
                onChange={e => searchToDo(e.target.value)}
                placeholder="Search"
            />
        )
    }
}

export default Searchbox;