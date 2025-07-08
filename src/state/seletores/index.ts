import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";


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


