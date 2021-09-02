class Persona {
    constructor(nombre, apPaterno,apMaterno,email){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;
    }

    imprimePersona = function(){
        console.log(this);
    }
}

let persona1 = new Persona("Alan","Perez","Santacruz","alanperez@gmail.com");
persona1.imprimePersona();

let persona2 = new Persona("Caleb","Perez","Santacruz","Calebperez@gmail.com");
persona2.imprimePersona();

let persona3 = new Persona("Brian","Perez","Santacruz","brianperez@gmail.com");
persona3.imprimePersona();

let personas = [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);


//console.log(persona3);
// console.log(JSON.stringify(personas)); ///convierte a JSON

var persona4 ='{ "nombre": "Brian", "apPaterno": "Perez","apMaterno": "Santacruz", "email": "brianperez@gmail.com"}';
console.log(JSON.parse(persona4)); //Verifica s una cadena contiene JSON valido