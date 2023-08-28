import { ajax } from "../helpers/ajax.js";
import { search } from "../helpers/searchName.js";
import api from "../helpers/urls.js"
import { Card } from "./Card.js";
import { ContainerCards } from "./ContainerCards.js";

    export const Router = ({hash} = location) =>{
        console.log(hash);
        
        if(hash == "" || hash == "#/"){
            ajax({
                url: api.TODOS,
                callback: (data)=>{
                    document.querySelector("#section").append(ContainerCards(data));
                    
                }
            })
        
            // document.querySelector("#section").innerHTML = `
            //     <h2>En proceso</h2>
            // `
        }else{
            // console.log(api.SEARCHID + localStorage.getItem("id"));
            ajax({
                url:api.SEARCHID + localStorage.getItem("id"),
                callback: data => document.querySelector("#section").append(Card(data))    
            })
            
        }
        search();
        
    }
//Default-> Una sola cosa,
