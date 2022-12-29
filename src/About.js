import Sidebar from './Sidebar.js';

export default function About() {
	return (
		<div className="about">
			<div className="articleContent">
				<Sidebar />
				<img alt="image of a good software developer." className="selfPortrait" src="./img/me.jpeg"/>
				<h2 className="articleHeading">Who I Am</h2>
				<p className="aboutText">
					My name is Landon Aaker and I have been working on software development for three years. I especially love working with SQL, Linux (Debian flavors). In my current position I have been using a LAMP(erl) stack for backend (with some nodeJS) and JQuery and Backbone for a little front-end. I also like coding in C#, Python, and Java. I love all things IT and I look forward towards creating solutions for you.
				</p>
				<p className="aboutText">
					When I am not programming, I am often reading old books, spending time with my baby, or planning out my next Dungeon World (like D&D but better) campaign.
					I also like <a href="https://www.poetryfoundation.org/poems/44651/the-tide-rises-the-tide-falls">this poem</a> and <a href="https://www.youtube.com/watch?v=wrLDoitgYp4&list=FLT1K0Lc1vrCikcPdNI6spCA&index=74&ab_channel=YUNGRISK">this video</a> and <a href="https://www.youtube.com/watch?v=RMwR1kXuGzk&list=PLaPy9ZmwmJ3LbbYjygXVGYIQ-Uv8DuUAQ&index=3&ab_channel=EvanBertram">this song</a>.
				</p>
			</div>
		</div>
	);
}
