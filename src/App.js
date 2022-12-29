import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from './components/Card.js';
import Portfolio from './components/Portfolio.js';
import About from './About.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

	const navData = [
		{
			label:"home",
			link:"/",
		},
		{
			label:"about",
			link:"/about"
		}
	];

	const navs = navData.map((nav,i) => {
		if (i % 3 === 0) {
		console.log("3");
		return <Nav.Link className="navLink navStyle3" id={nav.label} href={nav.link}>{nav.label}</Nav.Link>
		}
		else if (i % 2 === 0) {
		console.log("2");
		return <Nav.Link className="navLink navStyle2" id={nav.label} href={nav.link}>{nav.label}</Nav.Link>
		}
		else {
		console.log("1");
		return <Nav.Link className="navLink navStyle1" id={nav.label} href={nav.link}>{nav.label}</Nav.Link>
		}
	});


  return (
    <div className="App">
		<div className= "gradientDiv">
			<div className="titleDiv">
				<h1 className="mainTitle">Landon Aaker</h1>
				<p>Software Developer 🖥️</p>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" preserveAspectRatio="none">
				<path fill="#505050" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
			</svg>
		</div>
		<Navbar>
			<Nav>
				{navs}
			</Nav>
		</Navbar>
		<Router>
			<main>
				<Route path="/about" render={() => <About/>} />
				<Route exact path="/" render={() => <Portfolio/>} />
			</main>
		</Router>
	  </div>
  );
}

export default App;
