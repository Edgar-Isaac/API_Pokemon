//Integrantes: Edgar Isaac Meléndez Valencia
//Hugo Cortez Reyes
//Ricardo Daniel Martinez Parada
//Daniel Martin Ortega Garcia
//Para iniciar busqueda ingresar id o nombre de pokemon despues de /pokemon/

const url= 'https://pokeapi.co/api/v2/pokemon/cyndaquil/'


fetch(url)
.then(response => response.json())
.then(data => {
    
    let element = document.getElementById('elem')
    element.innerHTML= `
    <div>
    <p>Name: ${data.name} Type: ${data.types[0].type.name}</p>
    <p>Pokemon Number: ${data.order} </p>
    <p>Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}. </p>
    
    </div>
    
    <img src='${data.sprites.front_default}'/>
  
    `;
    console.log(data)
})
.catch(err=>console.log(err))