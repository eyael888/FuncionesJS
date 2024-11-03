let librosleidos=[] //se inicializa array vacio

//funcion para registrar un libro nuevo
function agregarlibro (title){ //el parametro es el titulo del libro
           if (title){        //si existe un titulo    
                librosleidos.push(title);  //se agrega a la  lista
            }                              //de libros leidos
return librosleidos //la funcion debera arrojar el array actualizado
}
//cada vez que se quiera agregar un libro se debera llamar a
//a la funcion manualmente con cada libro 
//cualquier titulo que se agregue debera hacerse antes de la
//funcion que muestra el array actualizado
agregarlibro("La Bella y la Bestia") 
//console.log(librosleidos)

agregarlibro("Don Quijote de la Mancha")
//console.log(librosleidos)

agregarlibro("El principito")



//la siguiente funcion imprime el array actualizado
function mostrarlibrosleidos(librosleidos){
            console.log(librosleidos);
           
    }
    
mostrarlibrosleidos(librosleidos) // para que se ejecute la funcion se llama

