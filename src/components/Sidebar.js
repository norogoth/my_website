export default function Sidebar() {
	return (
		<div className="sidebarDiv">
			<div className="sidebarContent">
				<h3 className="sidebarHeading">Email</h3>
				<p className="sideBarContent">landonaaker@gmail.com</p>
				<h3 className="sidebarHeading">Education</h3>
			<ul className="schoolList">
				<li className="schoolPar">
					<p className="school">CSU San Bernardino</p>
					<p className="degree">Bachelors in History</p>
				</li>
				<li className="schoolPair">
					<p className="school">Grand Canyon University</p>
					<p className="degree">Masters in Education</p>
				</li>
				<li className="schoolPair">
					<p className="school">Western Governor's University</p>
					<p className="degree" id="bscs">👉Bachelors in Computer Science</p>
				</li>
			</ul>
		</div>
		</div>
	)
}
