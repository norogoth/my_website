import Sidebar from './Sidebar.js';

export default function About() {
	return (
		<div className="about">
			<div className="articleContent">
				<Sidebar />
				<img alt="image of a good employee" className="selfPortrait" src="./img/me.jpeg"/>
				<h2 className="articleHeading">Who I Am</h2>
				<p className="aboutText">
					My name is Landon Aaker and I have been working on software development for three years. I especially love working with SQL, Linux, and any problems that can be solved within the CLI. I have been specializing lately in full-stack web-development but I also like coding in Python, C# and (I guess) Java. I love all things IT and I look forward towards creating solutions for your company.
				</p>
				<p>
					When I am not programming, I am often reading old books, baking bread, or planning out my next D&D campaign.
				</p>
			</div>
		</div>
	);
}
