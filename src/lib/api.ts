import axios from "axios";

export const api = axios.create({
    baseURL: 'http://10.0.0.220:3333',
    //TODO: ver o ip da maquina sempre q for usar o backend 
})