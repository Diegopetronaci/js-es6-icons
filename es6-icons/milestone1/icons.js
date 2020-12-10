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
    },
    {
      name: "gatto",
      prefix: "fas fa-cat",
      type: "animale",
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



