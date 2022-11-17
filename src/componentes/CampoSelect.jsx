CampoSelect.defaultProps = {
	name: "",
	label: "",
	items: [],
	firstEmpty: true,
	firstText: "",
	firstValue: "",
	onChange: () => {}
}

function CampoSelect(props) {
	const selectOptions = props.items.map(item =>
		<option key={item} value={item}>{item}</option>
	);

	return (
		<div>
			{props.label.length > 0 &&
				<label htmlFor={props.name}>{props.label}</label>
			}

			{props.items.length > 0 &&
				<select name={props.name} value={props.value} onChange={props.onChange}>
					{props.firstEmpty &&
						<option value={props.firstValue}>{props.firstText}</option>
					}
					{selectOptions}
				</select>
			}
		</div>
	);
}

export default CampoSelect;