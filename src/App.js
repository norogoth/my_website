import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
	  <Navbar>
		<Nav>
			<Nav.Link>Home</Nav.Link>
			<Nav.Link>About</Nav.Link>
		</Nav>
	  </Navbar>
	  <p>hello</p>
    </div>
  );
}

export default App;
