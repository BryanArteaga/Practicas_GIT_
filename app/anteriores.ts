class book {
    titulo:string;
    autor:string;
    año:number;
    constructor(titulo: string,autor: string,año: number){
        this.titulo= titulo;
        this.autor= autor;
        this.año= año;
    }
}

class Library{
    libreria: book[] = [];

    agregar(libros: book){
        this.libreria.push(libros);
    }
    
    buscar(autor: string): book [] {
        return this.libreria.filter(libros => libros.autor === autor);
    }

    lista(){
        document.write('lista de libros: ');
        this.libreria.forEach((libros, index)=>{
            document.write(` Libro: ${index + 1}`);
            document.write(` titulo: ${libros.titulo}`);
            document.write(` Autor: ${libros.autor}`);
            document.write(` Año de publicación: ${libros.año}`);
        });
    }
}

const library= new Library();
const dato1 = new book("Don Quijote de la Mancha", "Miguel de Cervantes Saavedra", 1605);
const dato2 = new book("1984", "George Orwell", 1949); 
const dato3 = new book("Cien años de soledad", "Gabriel García Márquez", 1967);
const dato4 = new book("Matar a un ruiseñor", "Harper Lee", 1960);
library.agregar(dato1);
library.agregar(dato2);
library.agregar(dato3);
library.agregar(dato4);

let menu:number=parseInt(prompt('1.Agregar libro \n 2.buscar por autor \n 3.lista de libros almacenados'));
switch(menu) {
    case 1:
        let bucle: number;
        do{
            const titulo= prompt('ingrese el titulo del libro');
            const autor= prompt('ingrese el autor');
            const año= prompt('ingrese el año de publicación');

            const libros= new book(titulo, autor, año)
            library.agregar(libros);
            bucle= parseInt(prompt('¿desea agregar otro libro? \n 1.Si \n 2.No'));
            } while (bucle === 1);
            library.lista();
        break;
    case 2:
        const buscarautor = prompt('ingrese el autor para buscar libro');
        const libroautor = library.buscar(buscarautor);

        if (libroautor.length > 0){
            document.write(`libros con el autor: ${buscarautor}`);
            libroautor.forEach((libros, index)=>{
                document.write(` Libro: ${index + 1}:`);
                document.write(` titulo: ${libros.titulo}`);
                document.write(` Autor: ${libros.autor}`);
                document.write(` Año de publicación: ${libros.año}`);
            });
        } else {
            document.write(`no se encontro el libro para el autor ${libroautor}.`);
        }
        break;
    case 3:
        library.lista();
        break;
    }
