import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";


// É UM SELECTOR E NAO UM ATOMO PORQUE É UM ESTADO DERIVADO, É O RESULTADO DO FILTRO, POR ISSO SELECTOR SELETOR DE DADOS
export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos);
        const todosOsEventos = get(listaDeEventosState);

        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
                return true;
            }
            // 2025-07-07 - slice contando os 10 caracteres ano mes dia 
            const oMesmoDiaEvento = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
            return oMesmoDiaEvento;
        }
        )
return eventos;

    }
});


//seletor de eventos asincrono 
export const eventoAsync = selector({   
    key: 'eventoAsync',
    get: async () => {
        //Poderia utilizar a LIB AXIOUS - lib especializada em http, mas como é só request sem autenticação utilizamos o fetch 
        const respostaHttp =  await fetch('http://localhost:8080/eventos')
        const eventosJson: IEvento[] = await respostaHttp.json();
        //tem que mapear porque esse retorno está em string json
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }

})

