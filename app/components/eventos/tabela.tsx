import Evento from "@/app/core/evento"
import { iconEdit, iconTrash } from './../icons/tabela'
interface TabelaProps{
    eventos: Evento[]
}
export default function Tabela(props: TabelaProps){
    function renderHeader(){
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">data</th>
                <th className="text-left p-3">descricao</th>
                <th className="text-left p-3">Ações</th>
            </tr>
        )
    }
    function renderizarAcoes(evento: Evento){
        return(
            <td className="flex">
                <button className={`
                    flex justify-center items-start
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-gray-100
                `}>{iconEdit}</button>
                <button className={`
                    flex justify-center items-start
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-gray-100
                `}>{iconTrash}</button>
            </td>
            
        )
    }
    function renderData(){
        return props.eventos?.map((evento, i)=>{
            return (
            <tr key={evento.id} className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                <td className="text-left p-3">{evento.id}</td>
                <td className="text-left p-3">{evento.nome}</td>
                <td className="text-left p-3">{evento.data}</td>
                <td className="text-left p-3">{evento.descricao}</td>
                <td className="text-left p-3">{evento.status}</td>
                {renderizarAcoes(evento)}
                
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