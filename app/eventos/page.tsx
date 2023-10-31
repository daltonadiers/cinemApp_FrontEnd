'use client'
import React from "react";
import Layout from "../components/eventos/layout";
import Tabela from "../components/eventos/tabela";
import Evento from "../core/evento";
import Botao from "../components/eventos/botao";


export default function Eventos(){
    const eventos = Evento.geraEventosMock()
    function eventoSelecionado(evento:Evento){
        console.log(evento.nome)
    }
    function eventoExcluido(evento:Evento){
        console.log(evento.nome)
    }
    return(
        <div className={`
                flex justify-center items-center h-screen
                bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
        `}>
            <Layout titulo='Cadastro de eventos'>
                <div className='flex justify-end'>
                    <Botao className='mb-4' cor ='bg-gradient-to-r from green-500 to-green-700'>
                        Novo Evento
                    </Botao>
                </div>
                <Tabela eventos={eventos} eventoExcluido={eventoExcluido} eventoSelecionado={eventoSelecionado}></Tabela>
            </Layout>
        </div>
    )
}
