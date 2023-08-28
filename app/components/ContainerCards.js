import { Card } from "./Card.js";


    export const ContainerCards = ({results} = props) =>{
        let div = document.createElement("div");
        div.setAttribute("class","div-container");

        results.map(elemento => div.append(Card(elemento)))
        
        return div
    }