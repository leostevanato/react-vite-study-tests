import { useContext, useEffect, useState } from "react";
import { ufsArray } from "../FetchUFs";
import { LangContext } from "../LangContext";
import CampoInput from "./CampoInput";
import CampoSelect from "./CampoSelect";

function FormUser() {
	let objetoUser = {};
	let camposList = [];

	const [lang, setLang] = useContext(LangContext);
	
	const camposForm = [
		{ "id": 1, "name": "name", "label": lang.name, "type": "text" },
		{ "id": 2, "name": "lastname", "label": lang.lastname, "type": "text" },
		{ "id": 3, "name": "username", "label": lang.username, "type": "text" },
		{ "id": 4, "name": "email", "label": lang.email, "type": "text" },
		{ "id": 5, "name": "password", "label": lang.password, "type": "text" },
		{ "id": 6, "name": "country", "label": lang.country, "type": "text" },
		{ "id": 7, "name": "city", "label": lang.city, "type": "text" },
		{ "id": 8, "name": "state", "label": lang.state, "type": "select" },
		{ "id": 9, "name": "address", "label": lang.address, "type": "text" }
	];

	const onChange = (e) => {
		setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	camposForm.forEach(campo => {
		objetoUser[campo.name] = "";

		if (campo.type === "text") {
			camposList.push(<CampoInput key={campo.id} name={campo.name} onChange={onChange} placeholder={campo.label} label={campo.label} type={campo.type} />);
		}

		if (campo.type === "select") {
			camposList.push(<CampoSelect key={campo.id} name={campo.name} onChange={onChange} label={campo.label} items={ufsArray} />);
		}
	});
	
	const [user, setUser] = useState(objetoUser);

	const handleSubmit = (e) => {
		e.preventDefault();
		
		let vazios = 0;
		
		for(const property in user) {
			(user[property].trim().length === 0) ? vazios++ : console.log(`${property}: ${user[property]}`);
		}
	};

	useEffect(() => {
		
	}, []);
	
	return (
		<div>
			<strong>{lang.username}:</strong>
			<br /><br />

			<div>
				<form onSubmit={handleSubmit}>
					{camposList}
					<br />
					<input type="submit" value={lang.submit} />
				</form>
			</div>
		</div>
	)
}

export default FormUser;