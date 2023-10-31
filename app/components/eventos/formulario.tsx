import Evento from "@/app/core/evento"
import Entrada from "./entrada"

interface FormularioProps {
    evento: Evento
   }
   export default function Formulario(
    props: FormularioProps) {
    return (
    <div>
   <Entrada></Entrada>
    </div>
   )}