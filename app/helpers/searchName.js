import { ajax } from "./ajax.js";
import api from "./urls.js";
import { ContainerCards } from "../components/ContainerCards.js";

    export const search = ()=>{

    let buscador = document.querySelector("#buscador");

        buscador.addEventListener("click",(event)=>{
            event.preventDefault()
                console.log(event.target);

            let nameSearch = document.getElementById("input-buscador").value;
                ajax({
                    url:api.SEARCHNAME+nameSearch,
                    callback: (data)=>{
                        document.querySelector("#section").innerHTML = "";
                        document.querySelector("#section").append(ContainerCards(data));
                        //console.log(api.SEARCHNAME+nameSearch);
                    }
                })
                let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + "#" + encodeURIComponent(nameSearch);
                window.history.pushState({ path: newURL }, "", newURL);
            })
        }