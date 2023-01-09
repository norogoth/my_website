export default function Card(props) {

	function handleClick() {
	}

	console.log( props.tags );
	let tags = props.tags;
	let tagElems;
	if (tags) {
		tagElems = tags.map( tag =>
			<label className="cardTag">{tag}</label>
		);
	}

	return (
		<a href={props.link} className={props.className} onClick={() => handleClick()}>
			<div className="cardImageDiv">
				<img src={props.imagePath} className="cardImage"/>
			</div>
			<h2 className="cardTitle">{props.title}</h2>
			<p className="cardDescription">{props.description}</p>
			{tags}
		</a>
	);
}
