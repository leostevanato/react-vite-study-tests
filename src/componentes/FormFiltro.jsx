import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { LangContext } from "../LangContext";

function FormFiltro() {
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState("");
	const inputRef = useRef();
	const filteredItems = useMemo(() => {
		return items.filter(item => {
			return item.valor.toLowerCase().includes(query.toLowerCase());
		});
	}, [items, query]);

	const [lang, setLang] = useContext(LangContext);

	useEffect(() => {
		// console.log("items", items);
		// console.log("filteredItems", filteredItems);
	}, [items, filteredItems]);

	function addItem(e) {
		e.preventDefault();
	
		const valor = inputRef.current.value;

		if (valor === "") return;
	
		const novo = { "id": uuidv4(), "valor": valor };

		setItems(prev => {
			return [...prev, novo];
		});

		inputRef.current.value = ""; // Limpa o campo ao clicar em Add
	}

	function removerItem(e) {
		e.preventDefault();

		setItems(current =>
			current.filter(
				(item) => item.id !== e.target.parentNode.id
			)
		);
	}

	return (
		<>
			<form onSubmit={addItem}>
				{`${lang.new} ${lang.item}`}: <input ref={inputRef} type="text" />
				<button type="submit">{lang.add}</button>
			</form>

			{(items.length > 0) ?
				<>
					<br />
					{`${lang.filter} ${lang.items}`}: <input type="search" value={query} onChange={e => setQuery(e.target.value)} />
					<br /><br />

					<strong>{lang.items}:</strong>

					<div className="items-adicionados">
					{(filteredItems.length > 0) ?
						filteredItems.map((item) => {
							return <div key={item.id} id={item.id} className="item-adicionado"><span className="item-adicionado-texto">{item.valor}</span><span onClick={removerItem} className="botao-remover">x</span></div>
						})
					:
						<span>{lang["no-items-filter"]}</span>
					}
					</div>
				</>
			: ""
			}
		</>
	);
}

export default FormFiltro;