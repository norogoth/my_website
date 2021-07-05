export default function Card(props) {
	return (
		<div className={props.className}>
			<img src={props.imagePath} className="cardImage"/>
			<h2 className="cardTitle">{props.title}</h2>
			<p className="cardDescription">{props.description}</p>
		</div>
	);
}
