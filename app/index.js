//Vamos a trabajar con la API Rick and Morty
//https://rickandmortyapi.com/
//DOMContentLoaded->Cuando el DOM este cargado

//Con React -> ./App
//Con JavaScript -> ./App.js
import { App } from "./App.js";

    document.addEventListener("DOMContentLoaded", App);

//Evento ->hashchange
    window.addEventListener("hashchange", App);
