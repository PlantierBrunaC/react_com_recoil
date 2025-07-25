import React from 'react';
import { IEvento } from '../../interfaces/IEvento'
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../state/atom';
import useDeletarEvento from '../../state/hooks/useDeletarEvento';

const Evento: React.FC<{ evento: IEvento}> = ({
  evento }) => {

    const excluirEvento = useDeletarEvento(); 

  // const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  // const excluirEvento = () => {
  //   setListaDeEventos(listaAntiga => listaAntiga.filter(evt => evt.id !== evento.id))
  //   // Função acima está pegando a lista antiga de eventos filtrando os eventos (evt) 
  //   // cujo o ID seja diferente do evento que foi clicado que está trazendo o ID
    
  // }

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} />
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => excluirEvento(evento)}> </i>
  </div>)
}

export default Evento