
// Qui le icone che abbiamo definito nella milestone 1

$(document).ready(function () {
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
    new Icons("cat", "fas", "fa-cat", "animal"),
    new Icons("carrot", "fas", "fa-carrot", "vegetable"),
    new Icons("user", "fas", "fa-user", "profile"),
    new Icons("user", "fas", "fa-horse", "animal"),
    new Icons("ninja", "fas", "fa-user-ninja", "profile")
  ]
  /* console.log(icone); */
  // Selezioniamo il container icons

  const container = $(".icons");  //selector//

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

  /* ---- FUNCTIONS ----*/
  // Creiamo una funzione per iterare nell'array e che appenda al container le icone.
  // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
  // tip: il template literal ci puo aiutare con il markup

  
  ///////////////////////////////////////////////////////////////////////////Inizio Seconda Parte///////////////////////////////////////////////////
  
  //definiamo dei colori per le icone (blue, orange, purple)
  //aggiungiamo dei colori usando una funzione

  const newArrey = icone.map(element =>{
    if (element.family === "animal") {
      var color = "blue";
    } else if (element.family === "vegetable"){
      var color = "orange";
    } else {
      var color = "purple";
    }

    let newObj = {...element, color: color}

    return newObj

  });
  
  stampatore(newArrey, container);
  
  console.log(newArrey);



/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.

});