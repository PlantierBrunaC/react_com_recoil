import React from 'react';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';
import { useRecoilValue } from 'recoil';
import { filtroDeEventos, listaDeEventosState } from '../../state/atom';
import useListaDeEventos from '../../state/hooks/useListaDeEventos';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';

const ListaDeEventos: React.FC = () => {
  // ALTERADO POR INTERFACE DO FILTRO DO EVENTO const ListaDeEventos: React.FC<{

  //   aoFiltroAplicado: (data: Date | null) => void }> = ({
  //   aoFiltroAplicado }) => {

  const eventos = useListaDeEventos();
  
  // Removido porque criamos o seletor dentro de state que já realiza o filtro 
  // const todosOsEventos = useListaDeEventos();
  // const filtro = useRecoilValue<IFiltroDeEventos>(filtroDeEventos);
  // const eventos = todosOsEventos.filter(evento => {
  //   if (!filtro.data) {
  //     return true;
  //   }
  //   // 2025-07-07 - slice contando os 10 caracteres ano mes dia 
  //   const oMesmoDiaEvento = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
  //   return oMesmoDiaEvento;
  // }
  // )

  // substituido por Hook const eventos = useRecoilValue(listaDeEventosState);

  return (<section>
    <Filtro />
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}

export default ListaDeEventos