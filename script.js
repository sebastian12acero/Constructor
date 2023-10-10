//let personaDic = {
 //   nombre: "jhon",
   // edad: 21,
   // esMayorDeEdad: true
//}

// respirar
// hablar
// comer
// ir al baño
// dormir

//let vehiculo = {
   // marca: "Chevrolet",
   // modelo: 2011,
    //color: "rojo"
//}

// encender
// arrancar
// dar reversa
// encender luces
// (...)






// Definimos una clase llamada "Persona"
class  Libro {
    // Constructor para inicializar propiedades

    constructor(TituloL, autorL, generoL ) {
        this.nombre = TituloL;
        this.autor = autorL;
        this.genero = generoL;
        this.leido = false;

    }

    Leido() {
        this.leido = true;
    }

    NoLeido() {
        this.leido = false;
    }

    informacion() {
        const estadoLeido = this.leido ? "Sí" : "No";
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${estadoLeido}`);
    }
}

// Crear instancias de la clase Libro
const libro1 = new Libro("El padrino", "Mario puzo", "policial");
const libro2 = new Libro("el gran Gatsky", "f.scott", "Novela ");

// Marcar uno de los libros como leído
libro2.Leido();

// Mostrar la información de ambos libros
libro1.informacion();
libro2.informacion();

    // Método para saludar
    //saludar() {
     //   console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    //}

    //mayorDeEdad() {
      //  if (this.edad >= 18) {
       //     console.log("Me llamo " + this.nombre + " y soy mayor de edad")
        //} else {
          //  console.log(`Me llamo ${this.nombre} y no soy mayor de edad`)
        //}
    //}

    /* saltar() {
        console.log("Me llamo " + this.nombre + " y estoy saltando")
    }

    hacerConsignacion(valor) {
        this.valorEnBanco += valor;
    }

}

const persona = new Persona("Juan", 30);
persona.saludar()
persona.mayorDeEdad()

const persona2 = new Persona("Menganito", 14);
persona2.mayorDeEdad()
persona2.saltar()

console.log(persona.valorEnBanco)
persona.hacerConsignacion(100)
console.log(persona.valorEnBanco)*/
