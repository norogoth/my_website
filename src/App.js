import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from './Card.js';

function App() {

	const navData = [
		{
			label:"home",
			link:"null for now",
		},
		{
			label:"about",
			link:"null for now"
		}
	];

	const cardData = [
		{
			imagePath: "null",
			title: "sample title",
			description: "sample description. lorem ipsum dolor sit amet.",
		}
	];
	
	const cards = cardData.map((cardObj, i) => {
		console.log("entering code");
		if (i % 3 === 0) {
		console.log("3");
			return <Card className="card cardStyle3" imagePath={cardObj.imagePath} title={cardObj.title} description={cardObj.description} />
		}
		else if (i % 2 === 0) {
		console.log("2");
			return <Card className="card cardStyle2" imagePath={cardObj.imagePath} title={cardObj.title} description={cardObj.description} />
		}
		else {
		console.log("1");
			return <Card className="card cardStyle1" imagePath={cardObj.imagePath} title={cardObj.title} description={cardObj.description} />
		}
	});

  return (
    <div className="App">
		<div className= "gradientDiv">
			<div className="titleDiv">
				<h1 className="mainTitle">Main Title</h1>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
				<path fill="#505050" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
			</svg>
		</div>
		<Navbar>
			<Nav>
				<Nav.Link className="navLink" id="homeNav">Home</Nav.Link>
				<Nav.Link className="navLink" id="aboutNav">About</Nav.Link>
			</Nav>
		  </Navbar>
		  <div className="cardDiv">
			{cards}
		</div>
	  </div>
  );
}

export default App;
