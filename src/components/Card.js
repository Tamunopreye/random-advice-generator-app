import React from "react";
import dice from "../assets/icon-dice.svg";
import divider from "../assets/pattern-divider-desktop.svg";

const Card = ({ advice, onClick }) => {
	return (
		<div className="card">
			<span id="id">{`Advice #${advice.id}`}</span>
			<p id="quote">{`"${advice.advice}"`}</p>
			<div className="svgs">
				<img src={divider} alt="divider" id="divider" />
				<button onClick={onClick}>
					<img src={dice} alt="dice" />
				</button>
			</div>
		</div>
	);
};

export default Card;
