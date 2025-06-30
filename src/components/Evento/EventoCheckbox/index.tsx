import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

  // const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  const atualizarEvento = useAtualizarEvento()

  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo
    atualizarEvento(eventoAlterado)

      // setListaDeEventos(listaAntiga => {
      //   const indice = listaAntiga.findIndex(evt => evt.id === evento.id)
      //   return [...listaAntiga.slice(0, indice), eventoAlterado, ...listaAntiga.slice(indice + 1)]
      // })
  }


  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox