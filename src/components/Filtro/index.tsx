import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';

// ALTERADO POR INTERFACE DE FILTROS const Filtro: React.FC<{ aoFiltroAplicado: (data: Date | null) => void }> = ({ aoFiltroAplicado }) => {
const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const setFiltroDeEvento = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos)
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEventos = {}
    if (data) {
      filtro.data = new Date(data)
    } else{
      filtro.data = null
    }
    setFiltroDeEvento(filtro); 
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro