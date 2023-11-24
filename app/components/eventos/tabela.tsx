import Evento from "@/app/core/evento"
import { iconEdit, iconTrash } from './../icons/tabela'
interface TabelaProps{
    eventos: Evento[]
}
interface TabelaProps {
    eventos: Evento[]
    eventoSelecionado?: (evento: Evento) => void
    eventoExcluido?: (evento: Evento) => void
   }
export default function Tabela(props: TabelaProps){
    const exibirAcoes = props.eventoSelecionado || props.eventoExcluido
    function renderHeader(){
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">data</th>
                <th className="text-left p-3">descricao</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }
    function renderizarAcoes(evento: Evento) {
        return (
            <td className="flex justify-center">
            {props.eventoSelecionado
            ? ( <button onClick={() => props.eventoSelecionado?.(evento)}
            className={`flex justify-center items text-green-600
            rounded-full p-2 m-1 hover:bg-gray-100`}>{iconEdit}</button>)
            : false }
            {props.eventoExcluido
            ? (<button onClick={() => props.eventoExcluido?.(evento)}
            className={`flex justify-center items text-red-600
            rounded-full p-2 m-1 hover:bg-gray-100`}>{iconTrash}</button>)
            : false}
            </td>)
        }
    function renderData(){
        return props.eventos?.map((evento, i)=>{
            return (
            <tr key={evento.id} className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                <td className="text-left p-3">{evento.id}</td>
                <td className="text-left p-3">{evento.filmname}</td>
                <td className="text-left p-3">{evento.data}</td>
                <td className="text-left p-3">{evento.description}</td>
                <td className="text-left p-3">{evento.status}</td>

                {exibirAcoes? renderizarAcoes(evento):false}
                
            </tr>
            )
        })
    }

    return (
        <table>
            <thead>{renderHeader()}</thead>
            <tbody>{renderData()}</tbody>
        </table>
    )
}