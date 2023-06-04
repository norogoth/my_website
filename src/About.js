import Sidebar from './components/Sidebar.js';

export default function About() {
	return (
		<div className="about">
			<div className="articleContent">
				<Sidebar />
				<img alt="image of a good software developer." className="selfPortrait" src="./img/family.png"/>
				<h2 className="articleHeading">Who I Am</h2>
				<p className="aboutText">
				I am a software developer a Bachelor's degree in computer science and professional experience as a back-end developer. I specialize in backend web development, particularly in NodeJS and Java. At Equinix, a global server colocation company, I played a key role in large-scale integration tasks, streamlining inventory management through robust backend systems. Additionally, my experience at the Conference Exchange sharpened my problem-solving skills and allowed me to modernize legacy systems to meet industry standards.
				Beyond my technical expertise, I possess strong negotiation and communication skills developed during my six years of teaching high school. This combination of technical proficiency and interpersonal abilities enables me to effectively understand client needs, explore solutions, and collaborate with fellow developers to improve software offerings.
				For full resume, references, letters of req, questions or anything else, feel free to email me at landonaaker@gmail.com
				</p>
				<p className="aboutText">
					When I am not programming, I am often reading old books, spending time with my baby, or planning out my next Dungeon World (like D&D but better) campaign.
					I also like <a href="https://www.poetryfoundation.org/poems/44651/the-tide-rises-the-tide-falls">this poem</a> and <a href="https://www.youtube.com/watch?v=wrLDoitgYp4&list=FLT1K0Lc1vrCikcPdNI6spCA&index=74&ab_channel=YUNGRISK">this video</a> and <a href="https://www.youtube.com/watch?v=RMwR1kXuGzk&list=PLaPy9ZmwmJ3LbbYjygXVGYIQ-Uv8DuUAQ&index=3&ab_channel=EvanBertram">this song</a>.
				</p>
			</div>
		</div>
	);
}
