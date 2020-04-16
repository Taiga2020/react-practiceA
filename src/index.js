import React from "react";
import ReactDOM from "react-dom"

const messageStyle = {
	color: "blue"
};

const App = () => {
	return (
		<>
			<h2>Reactハンズオン！</h2>
			<p style={{color: "red" }}>Reactって難しいの？</p>
			<p style={messageStyle}>Reactは難しくないよー</p>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
