import Nav from 'react-bootstrap/Nav';
import Card from './Card.js';

export default function Portfolio() {

	const cardData = [
		{
			imagePath: "/img/bingo1.png",
			title: "Full-Stack Bingo Application",
			tags:[],
			description: "Full-stack application coded with React and Express. MySQL backend.",
			link: "https://github.com/norogoth/GusAndEddyWebsite"
		},
		{
			imagePath: "/img/pitcher2.png",
			title: "Pitcher Analyzer",
			tags:[],
			description: "Analyzes MLB pitchers using regression analysis to create projections.",
			link: "https://github.com/norogoth/PitcherAnalyzer"
		},
		{
			imagePath: "/img/planner1.png",
			title: "Appointment Manager",
			languages:["Java", "SQL"],
			description: "Simple application that uses MySQL backend to create, view, and edit appointments.",
			link: "https://github.com/norogoth/AppointmentManager"
		},
		{
			imagePath: "/img/inventory3.png",
			title: "Inventory Manager",
			tags:["Java"],
			description: "Prototype application for an inventory mangement system. ",
			link: "https://github.com/norogoth/Inventory-Manager"
		},
		{
			imagePath: "/img/cat1.png",
			title: "Cat Game",
			tags:[],
			description: "A simple little game with original artwork and graphics. Code is old (read: \"bad\") but game is still fun. :3",
			link: "https://github.com/norogoth/cat_game"
		},
		{
			imagePath: "/img/routing1.png",
			title: "Vehicle Routing Problem",
			tags:[],
			description: "Python script to solve vehicle routing problem",
			link: "https://github.com/norogoth/VehicleRoutingProblem"
		},
		{
			imagePath: "/img/circuit.png",
			title: "Calculator",
			tags:[],
			description: "Simple little JS Calculator from my pre-React days.",
			link: "https://github.com/norogoth/VehicleRoutingProblem"
		},
		{
			imagePath: "/img/circuit.png",
			title: "\"Flappy-bird\"-style game",
			tags:[],
			description: "A simple little game created using Javascript.",
			link: "https://github.com/norogoth/VehicleRoutingProblem"
		},
	];
	
	const cards = cardData.map((cardObj, i) => {

		let classNameString;

		if (i % 3 === 0) {
			classNameString = "card cardStyle3";
		}
		else if (i % 2 === 0) {
			classNameString = "card cardStyle2";
		}
		else {
			classNameString = "card cardStyle1";
		}
		return <Card className={classNameString} link={cardObj.link} tags={cardObj.tags} imagePath={cardObj.imagePath} title={cardObj.title} description={cardObj.description} />
	});

  return (
    <div className="Portfolio">
			<div className="cardDiv">
				{cards}
			</div>
	  </div>
  );
}
