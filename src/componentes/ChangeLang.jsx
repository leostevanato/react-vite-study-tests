import { useContext } from "react";
import { LangContext, langs } from "../LangContext";

function ChangeLang() {
	const [lang, setLang] = useContext(LangContext);

	const handleClick = (e, lang_obj) => {
		e.preventDefault();

		setLang(lang_obj);
	}

	return (
		<div>
			<button onClick={event => handleClick(event, langs.ptbr)} disabled={lang === langs.ptbr} className="lang-change">
				<img src="/icons8-brazil-48.png" className="lang-flag" alt={langs["lang-name-ptbr"]} />
			</button>
			<button onClick={event => handleClick(event, langs.en)} disabled={lang === langs.en} className="lang-change">
				<img src="/icons8-usa-48.png" className="lang-flag" alt={langs["lang-name-en"]} />
			</button>
		</div>
	);
}

export default ChangeLang;