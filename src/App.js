import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";
import Header from "./components/Header";
import List from "./components/List";

function App() {
	const [text, setText] = useState("Munich");
	const { apartments, totalCount, loading, error } = useSelector(
		state => ({
			...state
		})
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actions.searchPropertiesData({ text: "Munich" }));
	}, [dispatch]);

	const handleInput = event => {
		setText(event.target.value);
	};
	const handleButton = () => {
		dispatch(actions.searchPropertiesData({ text }));
	};

	return (
		<div className="App">
			<Header
				handleInput={handleInput}
				text={text}
				count={totalCount}
				handleButton={handleButton}
			/>
			<section className="offers">
				<div className="container">
					<List items={apartments} loading={loading} error={error} />
				</div>
			</section>
		</div>
	);
}

export default connect()(App);
