

export const Card = ({name, image, id, origin, species} = props) =>{
    let div = document.createElement("div");
    div.setAttribute("class","card");
    document.addEventListener("click",(event)=>{
        // console.log(event.target.className);
        if(event.target.className == "btn btn-primary"){
            localStorage.setItem("id",event.target.id);
        }
    })
    div.innerHTML = `
        <img src=${image} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${name}</h5>
            <p class="card-text">Origen: ${origin.name}</p>
            <p class="card-text">Especie: ${species}</p>
            <a href="#/${name}" id=${id} class="btn btn-primary">Ver más</a>
        </div>
    `

    return div
}