import React from "react";
import ReactDOM from "react-dom";

import Msg from "./components/Msg";

const App = () => {
	return (
		<>
			<h2>Reactハンズオン！</h2>
			<Msg />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
