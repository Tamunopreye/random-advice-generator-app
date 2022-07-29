import { useState, useEffect } from "react";
// import axios from "axios";
import Card from "./components/Card";

function App() {
	const [advice, setAdvice] = useState("");
	useEffect(() => {
		getTask();
	}, []);

	const getTask = async () => {
		const response = await fetch("https://api.adviceslip.com/advice", {
			cache: "no-cache",
		});
		const data = await response.json();
		setAdvice(data.slip);
	};

	return (
		<div className="app">
			<Card advice={advice} onClick={getTask} />
		</div>
	);
}

export default App;
