$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1

  $(document).ready(function () {
    // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
    const icone = [
      {
        name: "gatto",
        prefix: "fas fa-cat",
        type: "animale",
        family: "",
      },
      {
        name: "verdura",
        prefix: "fas fa-carrot",
        type: "vegetale",
        family: "",
      },
      {
        name: "profilo",
        prefix: "fas fa-user",
        type: "profilo",
        family: "",
      },
      {
        name: "gatto",
        prefix: "fas fa-cat",
        type: "animale",
        family: "",
      },
      {
        name: "verdura",
        prefix: "fas fa-carrot",
        type: "vegetale",
        family: "",
      },
      {
        name: "profilo",
        prefix: "fas fa-user",
        type: "profilo",
        family: "",
      },
      {
        name: "gatto",
        prefix: "fas fa-cat",
        type: "animale",
        family: "",
      },
      {
        name: "verdura",
        prefix: "fas fa-carrot",
        type: "vegetale",
        family: "",
      },
      {
        name: "profilo",
        prefix: "fas fa-user",
        type: "profilo",
        family: "",
      },
      {
        name: "gatto",
        prefix: "fas fa-cat",
        type: "animale",
        family: "",
      },
      {
        name: "verdura",
        prefix: "fas fa-carrot",
        type: "vegetale",
        family: "",
      },
      {
        name: "profilo",
        prefix: "fas fa-user",
        type: "profilo",
        family: "",
      },
      {
        name: "gatto",
        prefix: "fas fa-cat",
        type: "animale",
        family: "",
      },
      {
        name: "verdura",
        prefix: "fas fa-carrot",
        type: "vegetale",
        family: "",
      },
      {
        name: "profilo",
        prefix: "fas fa-user",
        type: "profilo",
        family: "",
      }
    ]
    console.log(icone);
    // Selezioniamo il container icons

    const icons = $(".icons");

    //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
    /* icone.forEach(icona => {
      let markup = `<div>
        <i class="${icona.prefix}" style="color:blue"></i>
        <div class="title">${icona.name}</div>
        </div>`;
        console.log(markup);
        icons.append(markup);
    }); */


    /* ---- FUNCTIONS ----*/
    // Creiamo una funzione per iterare nell'array e che appenda al container le icone.
    // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
    // tip: il template literal ci puo aiutare con il markup

    function myFunctions() {
      icone.forEach(icona => {
        let markup = `<div>
      <i class="${icona.prefix}" style="color:blue"></i>
      <div class="title">${icona.name}</div>
      </div>`;
        console.log(markup);
        icons.append(markup);
      });
    };

    const prova = myFunctions();
  });
  ////////////////////////////////////////////////////////////////////////////////////Inizio Seconda Parte///////////////////////////////////////////////////
  // definiamo dei colori per le icone (blue, orange, purple)

  const blue = `Style="color:blue"`;
  const orange = `Style="color:orange"`;
  const purple = `Style="color:purple"`;

  //aggiungiamo dei colori usando una funzione
  function addColori(colore1, colore2, colore3, array) {

    array.forEach(element => {
      if (element.type === element.profilo) {
        return colore1;
      } else if (element.type === element.vegetale) { 
        return colore2;
      } else {
        return colore3;
      }
    });
  }

  //inseriamo le icone colorate nel container

});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
