import { useContext, useRef, useState } from "react";
import { LangContext } from "../LangContext";

function FormUserName() {
	const [input, setInput] = useState("");
	const inputRef = useRef();
	const [user, setUser] = useState({
		name: "João Silva",
		email: "joaosilva@email.com",
		images: ["profile.jpg", "cover.jpg"]
	});
	
	const [lang, setLang] = useContext(LangContext);

	const changeUserName = () => {
		const valor = inputRef.current.value;
		
		if (valor === "") return;
		
		setUser((prev) => ({ ...prev, name: input }));

		inputRef.current.value = "";
	};

	return (
		<div>
			<strong>{lang["user-name"]}:</strong>
			<br />

			<input ref={inputRef} onChange={(e) => setInput(e.target.value)} placeholder={`${lang.type} ${lang.the} ${lang.name}`} />
			<button onClick={changeUserName} className="first-letter-capitalize">{`${lang.change} ${lang["user-name"]}`}</button>
			<br /><br />

			<div className="first-letter-capitalize">{`${lang.the} ${lang.new} ${lang["user-name"]} ${lang.is}`} <strong>{user.name}</strong></div>
		</div>
	)
}

export default FormUserName;