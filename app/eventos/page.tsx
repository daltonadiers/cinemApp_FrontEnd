import React from "react";
import Layout from "../components/eventos/layout";
import Tabela from "../components/eventos/tabela";
import Evento from "../core/evento";


export default function Eventos(){
    const eventos = Evento.geraEventosMock()
    return(
        <div className={`
                flex justify-center items-center h-screen
                bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
        `}>
            <Layout titulo='Cadastro de eventos'>
                <Tabela eventos={eventos}></Tabela>
            </Layout>
        </div>
    )
}
