import { stringParaEntradaDeData } from "@/utils/converters";

export default class Evento{
    id: number | null;
    filmname: string;
    data: string;
    description: string;
    status: string;

constructor(id: number | null, filmname: string, data: string, description:string, status: string){
        this.id= id;
        this.filmname = filmname;
        this.data = data;
        this.description = description;
        this.status = status;
     }
     static geraEventosMock() {
        return [ new Evento(1, "UPF em Dança",
        "10/11/2024",
        "Evento de dança",
        "PREVISTO",
        ),
        new Evento(2, "UPF na feitech",
        "10/11/2024",
        "Evento de tecnologia",
        "PREVISTO",
        )
        ]
       }
       static vazio(): Evento {
         return new Evento(null, "", stringParaEntradaDeData(""), "", "");
        }
        
    }