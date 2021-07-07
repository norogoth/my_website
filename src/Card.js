export default function Card(props) {

	function handleClick() {
	}

	return (
		<a href={props.link} className={props.className} onClick={() => handleClick()}>
			<div className="cardImageDiv">
				<img src={props.imagePath} className="cardImage"/>
			</div>
			<h2 className="cardTitle">{props.title}</h2>
			<p className="cardDescription">{props.description}</p>
		</a>
	);
}
