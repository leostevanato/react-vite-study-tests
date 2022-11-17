CampoInput.defaultProps = {
	type: "text",
	name: "",
	label: "",
	placeholder: "",
	onChange: () => {}
}

function CampoInput(props) {
	return (
		<div>
			{props.label.length > 0 &&
				<label htmlFor={props.name}>{props.label}</label>
			}
			<input type={props.type} name={props.name} onChange={props.onChange} placeholder={props.placeholder} />
		</div>
	);
}

export default CampoInput;