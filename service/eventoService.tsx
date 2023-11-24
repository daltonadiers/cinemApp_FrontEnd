import axios from 'axios';
import Evento from '@/app/core/evento';
interface ApiResponse {
    content: Evento[];
}
const BASE_URL = 'http://localhost:8080';
export const fetchEventos = async (): Promise<Evento[]> => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/sessions`);
        return response.data.content;
    } catch (error) {
        throw new Error('Erro ao buscar eventos');
    }
};
export const cadastrarEvento = async (evento: Evento): Promise<Evento> => {
    try {
    const response = await axios.post<Evento>(`${BASE_URL}/sessions`, evento);
    return response.data;
    } catch (error) {
    console.error("Erro ao cadastrar evento:", error);
    throw error;
    }
   };
   export const atualizarEvento = async (evento: Evento): Promise<Evento> => {
    try {
    const response = await axios.put<Evento>(
    `${BASE_URL}/sessions/${evento.id}`, evento);
    return response.data;
    } catch (error) {
    console.error("Erro ao atualizar evento:", error);
    throw error;
    }
   };
   export const excluirEvento = async (id: number): Promise<void> => {
    try {
    await axios.delete(`${BASE_URL}/sessions/${id}`);
    } catch (error) {
    console.error("Erro ao excluir evento:", error);
    throw error;
    }
   };
   //