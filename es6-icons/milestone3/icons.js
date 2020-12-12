$(document).ready(function () {
 // icone come da milestone 1
  // Qui le icone che abbiamo definito nella milestone 1

  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  class Icons {                 //array//
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family
    }
  }

  const icone = [
    new Icons("cat", "fas", "fa-cat", "Animal"),
    new Icons("carrot", "fas", "fa-carrot", "Vegetable"),
    new Icons("user", "fas", "fa-user", "Profile"),
    new Icons("user", "fas", "fa-horse", "Animal"),
    new Icons("ninja", "fas", "fa-user-ninja", "Profile"),
    new Icons("dog", "fas", "fa-dog", "Animal"),
    new Icons("carrot", "fas", "fa-carrot", "Vegetable"),
    new Icons("user", "fas", "fa-user", "Profile"),
    new Icons("user", "fas", "fa-horse", "Animal"),
    new Icons("ninja", "fas", "fa-user-ninja", "Profile"),
    new Icons("dragon", "fas", "fa-dragon", "Animal"),
    new Icons("carrot", "fas", "fa-carrot", "Vegetable"),
    new Icons("user", "fas", "fa-user", "Profile"),
    new Icons("user", "fas", "fa-horse", "Animal"),
    new Icons("ninja", "fas", "fa-user-ninja", "Profile"),
  ]
  /* console.log(icone); */
  // Selezioniamo il container icons

  

  const container = $(".icons");  //selector jqery//

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

  function stampatore(array, selector) {
    array.forEach(element => {
      /* const {name, prefix, type, family} = element;   //solo se si vuole levare element.prefix, element.name etc...//
      */

      //inseriamo le icone colorate nel container
      selector.append($(`<div>
    <i class="${element.prefix} ${element.type}" style="color:${element.color}"></i>
    <div class="title">${element.name}</div>
    </div>`))

    });
  };

  /* stampatore(icone, container); */


  // colori come da milestone 2

  ///////////////////////////////////////////////////////////////////////////Inizio Seconda Parte///////////////////////////////////////////////////

  //definiamo dei colori per le icone (blue, orange, purple)
  //aggiungiamo dei colori usando una funzione

  const newArrey = icone.map(element => {
    if (element.family === "Animal") {
      var color = "blue";
    } else if (element.family === "Vegetable") {
      var color = "orange";
    } else {
      var color = "purple";
    }

    let newObj = { ...element, color: color }

    return newObj

  });

  stampatore(newArrey, container);

  console.log(newArrey);

  //aggiungiamo i tipi alla select
  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo

  const elSelect = document.getElementById("type");  //js
  /* const selettore = $("#type") */     //jquery

  elSelect.innerHTML += '<option value="Animal">Animal</option>';
  elSelect.innerHTML += '<option value="Vegetable">Vegetable</option>';                //con jquery
  elSelect.innerHTML += '<option value="Profile">Profile</option>'
  
  /* elSelect.append('<option value="">Animal</option>');
  elSelect.append('<option value="">Vegetable</option>');                //con jquery
  elSelect.append('<option value="">Profile</option>') */
  

  elSelect.addEventListener("change", Event => {

    const localContainer = document.querySelector(".icons");

    const scelta = elSelect.options[elSelect.selectedIndex].value;
    console.log(scelta);

    const arrayFilter = newArrey.filter(icona => icona.family == scelta)
    console.log(arrayFilter);
  
    localContainer.innerHTML = "";

    /* stampatore(arrayFilter, container); */

    if (scelta != "") {
      stampatore(arrayFilter, container);
    } else {
      stampatore(newArrey, container);
    }
  });
    
});