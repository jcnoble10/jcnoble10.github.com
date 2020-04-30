//console.log("Hola mundo con sj");

// DOM
// Me selecciona un solo elemento que contenga esta clase, en caso dado qe hayan mas selecciona solo el primero
//  let container = document.querySelector('.container');
//  console.log(container);
//
//  let links = document.querySelectorAll("a");
//  console.log(links);
//
// links.forEach(function(link){
//   console.log(link);
// });

// let celdas = document.querySelectorAll('td');
// celdas.forEach(function(td){
//   td.addEventListener("click",function(){
//     console.log(this);
//   })
// });

/*
//Obtener los elementos de la calse .close
 let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada de una de ellos
  link.addEventListener("click",function(){
    console.log(":)");
  });
});
*/

//Quitar y agregar clases a elementos html
 // let iconos = document.querySelectorAll('i');
 // iconos.forEach(function(icono){
 //   //icono.classList.remove("fa-star");
 //   icono.classList.add("fa-star");
 // })

let links = document.querySelectorAll('.close');

links.forEach(function(link){
  link.addEventListener("click", function(ev){
    ev.preventDefault();

    //Agregar y queitar las animaciones del elemento con calse content

    let content = document.querySelector(".content");

    //Quitando las clases
     content.classList.remove("zoomInDown");
     content.classList.remove("animated");

    //Agregando nuevas clases
     content.classList.add("fadeOutUp");
     content.classList.add("animated");

     setTimeout(function(){
       location.href = "./boletines/index.html";
       /*
       Este seria el direccionamiento estando en mi equipo(local)
       location.href = "../index.html";
       */
     },600);

  });
});
