import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from './Card.js';

function App() {

	const cardData = [
		{
			imagePath: "null",
			cardTitle: "sample title",
			cardDescription: "sample description. lorem ipsum dolor sit amet.",
		}
	];
	
	const cards = cardData.map((cardObj) => {
		return <Card imagePath={cardObj.imagePath} title={cardObj.itle} description={cardObj.cardDescription} />
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
				<Nav.Link className="navLink">Home</Nav.Link>
				<Nav.Link className="navLink">About</Nav.Link>
			</Nav>
		  </Navbar>
		  <div className="cardDiv">
			{cards}
		</div>
	  </div>
  );
}

export default App;
