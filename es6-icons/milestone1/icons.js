$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  class Icons {                 //array//
    constructor(name,prefix,type,family){
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family
    }
  }
  
  const icone = [
    new Icons ("cat", "fas", "fa-cat", "animal"),
    new Icons ("carrot", "fas", "fa-carrot", "vegetable"),
    new Icons("user", "fas", "fa-user", "profile"),
    new Icons("user", "fas", "fa-horse", "animal"),
    new Icons("ninja", "fas", "fa-user-ninja", "profile")
  ]
  console.log(icone);
  // Selezioniamo il container icons

  const container = $(".icons");  //selector//

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  
  
    function stampatore(array, selector) {
      array.forEach(element => {
        selector.append($(`<div>
      <i class="${element.prefix} ${element.type}" style="color:blue"></i>
      <div class="title">${element.name}</div>
      </div>`))
      });
    };

    console.log(stampatore(icone, container));

/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

  
});



