//El archivo ajax va en minuscula porque no es un componente visual, y esta seccion es donde creamos las funciones auxiliar

    export const ajax = ({url, callback} = props) =>{
        
        fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        
    }

