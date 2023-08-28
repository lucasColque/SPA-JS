//Se puede importar una funcion sin las () pero luego hay que utilizarlas

    import { Header } from "./components/Header.js";
    import { Main } from "./components/Main.js";
    import { Router } from "./components/Router.js";


    export const App = () =>{
        let divRoot = document.querySelector("#root");
        divRoot.innerHTML = `<h1> Nuestra primera web SPA</h1>`;
        document.querySelector("h1").style.display = "none";
        divRoot.append(Header('Home'));

        divRoot.append(Main());
        
        Router()

        // ajax({
        //     url: api.TODOS,
        //     callback: (data)=> document.querySelector("#section").append(ContainerCards(data))
        // })
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    