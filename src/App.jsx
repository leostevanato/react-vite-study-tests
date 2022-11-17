import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Cards from './componentes/Cards';
import ChangeLang from './componentes/ChangeLang';
import Counter from './componentes/Counter';
import FormFiltro from './componentes/FormFiltro';
import FormUser from './componentes/FormUser';
import FormUserName from './componentes/FormUserName';
import { LangContext, langs } from './LangContext';

const cards = [
	{ "id": "1", "conteudo": <Counter />, "classes": "contador" },
	{ "id": "2", "conteudo": <FormFiltro />, "classes": "form-filtro" },
	{ "id": "3", "conteudo": <FormUserName />, "classes": "" },
	{ "id": "4", "conteudo": <FormUser />, "classes": "form-user" },
];

function App() {
	const [lang, setLang] = useState(langs.ptbr);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<h1>Vite + React</h1>

			<div className="area-cards">
				<LangContext.Provider value={[lang, setLang]}>
					<ChangeLang />
					<Cards cards={cards} />
				</LangContext.Provider>
			</div>
		</div>
	)
}

export default App;
