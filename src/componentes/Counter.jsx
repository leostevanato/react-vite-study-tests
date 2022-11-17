import { useContext, useEffect, useRef, useState } from "react";
import { LangContext } from "../LangContext";

function useFirstRender() {
	const ref = useRef(true);
	const firstRender = ref.current;
	ref.current = false;
	return firstRender;
}

function Counter() {
	const [teste, setTeste] = useState(0);
	const [count, setCount] = useState(0);
	const firstRender = useFirstRender();
	const [lang, setLang] = useContext(LangContext);

	useEffect(() => {
		if (!firstRender) {
			console.log('renderizou');
		}
	}, [teste]);

	function setValorContador(value) {
		setCount(countAtual => {
			let valor_retorno = countAtual + value;

			if (valor_retorno % 5 === 0) {
				setTeste(valor_retorno);
			}

			return valor_retorno;
		});
	}

	return (
		<>
			<button onClick={() => setValorContador(-1)}>-</button>
			<span>{`${lang.counter} ${lang.is}`} {count}</span>
			<button onClick={() => setValorContador(1)}>+</button>
		</>
	)
}

export default Counter;
