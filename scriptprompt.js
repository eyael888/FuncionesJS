// esta version realiza el registro por libro mediante un prompt

let librosleidos=[]  //se declara array vacio para libros leidos

//en la funcion para agregar el libro no ponemos parametro
//pues el parametro sera definido en el ambito interno de la
//funcion
function agregarlibro (){
    //dado que no sabemos cuantos libros se van a ingresar
    //conviene usar el loop while
    while (true){    //while se ejecuta mientras sea verdadero

        //creamos la variable prompt donde registraremos los libros
   const title=prompt("Agrega el titulo de un libro que hayas leido:");
   if (!title) break; //si no se escribe un titulo, while se detiene
   librosleidos.push(title); //si se escribe un titulo se agrega al array
            }
}

//en esta funcion solo mandamos a imprimir el array
function mostrarlibrosleidos(librosleidos){
  
    console.log(librosleidos);
  
        }

agregarlibro ();
mostrarlibrosleidos(librosleidos);
