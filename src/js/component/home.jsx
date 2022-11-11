import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			{/* {props.time} */}
			{props.hours} {props.minutes} {props.seconds}
		</div>
	);
};

export default Home;
