import Nav from 'react-bootstrap/Nav';
import Card from './Card.js';

export default function Portfolio() {

	const cardData = [
		{
			imagePath: "/img/village.png",
			title: "Village Generator (WIP)",
			tags:["Javascript"],
			description: "Creates a random village for a tabletop RPG session. Select 'generate' to see random results. Data is not mine.",
			link: "https://deluxe-semifreddo-ccd4ed.netlify.app/"
		},
		{
			imagePath: "/img/bingo1.png",
			title: "Full-Stack Bingo Application",
			tags:["Javascript"],
			description: "Full-stack application coded with React and Express. MySQL backend.",
			link: "https://github.com/norogoth/GusAndEddyWebsite"
		},
		{
			imagePath: "/img/pitcher2.png",
			title: "Pitcher Analyzer",
			tags:["C#"],
			description: "Analyzes MLB pitchers using regression analysis to create projections.",
			link: "https://github.com/norogoth/PitcherAnalyzer"
		},
		{
			imagePath: "img/wires.png",
			title: "Perl hashifier",
			tags:["Perl"],
			description: "This is a perl script that can read hashes into memory using txt files.",
			link: "https://github.com/norogoth/perl_object_reader/blob/master/README.md",
		},
		{
			imagePath: "/img/planner1.png",
			title: "Appointment Manager",
			languages:["Java", "SQL"],
			description: "Simple prototype application that uses MySQL backend to create, view, and edit appointments.",
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
			tags:["Python"],
			description: "A simple little game with original artwork and graphics. Code is old (read: \"bad\") but game is still fun. :3",
			link: "https://github.com/norogoth/cat_game"
		},
		{
			imagePath: "/img/routing1.png",
			title: "Vehicle Routing Problem",
			tags:["Python"],
			description: "Python script to solve vehicle routing problem",
			link: "https://github.com/norogoth/VehicleRoutingProblem"
		},
		{
			imagePath: "/img/my_website.png",
			title: "Code for this Website",
			tags:["javascript","React"],
			description: "Here is the code for this website. Made with React.",
			link: "https://github.com/norogoth/my_website"
		},
		/*
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
		*/
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
		<div className="portDescDiv">
			<p className="portDesc light">Most of my work is closed source but here are some of my little side-projects</p>
		</div>
			<div className="cardDiv">
				{cards}
			</div>
	  </div>
  );
}
