import Sidebar from './Sidebar.js';

export default function About() {
	return (
		<div className="about">
			<div className="articleContent">
				<Sidebar />
				<img alt="image of a good employee" className="selfPortrait" src="./img/me.jpeg"/>
				<h2 className="articleHeading">Who I Am</h2>
				<p className="aboutText">
					My name is Landon Aaker and I have been working on software development for three years. I especially love working with SQL, Linux (I use Pop OS), and any problems that can be solved within the CLI. I have been specializing lately in full-stack web-development but I also like coding in Python, C# and (I guess) Java. I love all things IT and I look forward towards creating solutions for your company.
				</p>
				<p className="aboutText">
					When I am not programming, I am often reading old books, baking bread, or planning out my next D&D campaign.
					I also like <a href="https://www.poetryfoundation.org/poems/44651/the-tide-rises-the-tide-falls">this poem</a> and <a href="https://www.youtube.com/watch?v=wrLDoitgYp4&list=FLT1K0Lc1vrCikcPdNI6spCA&index=74&ab_channel=YUNGRISK">this video</a> and <a href="https://www.youtube.com/watch?v=RMwR1kXuGzk&list=PLaPy9ZmwmJ3LbbYjygXVGYIQ-Uv8DuUAQ&index=3&ab_channel=EvanBertram">this song</a>.
				</p>
			</div>
		</div>
	);
}
