import React from "react";
import "../App.css";
import TodoList from "./TodoList";
import StateProvider from "./StateProvider";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<StateProvider>
						<TodoList />
					</StateProvider>
				</div>
			</div>
		);
	}
}
export default App;
