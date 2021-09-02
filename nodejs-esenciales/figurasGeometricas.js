class figuraGeometrica{
    constructor(base,altura){
        this.altura = altura;
        this.base = base;
    }

    calculaArea(base,altura){

    }

}

class Triangulo extends figuraGeometrica{
    // constructor(base,altura){
    //     super(base,altura);
       
    // }

    calculaArea(base,altura){
        let area = (this.base*this.altura)/2;
        return area;
    }
}

class Cuadrado extends figuraGeometrica{
    // constructor(base,altura){
    //     super(base,altura);
    // }

    calculaArea(base,altura){
        let area = this.base*this.altura;
        return area;
    }
}

class Rectangulo extends figuraGeometrica{
    // constructor(base,altura){
    //     super(base,altura);
    // }

    calculaArea(base,altura){
        let area = this.base*this.altura;
        return area;
    }
}

var cuadrado1 = new Cuadrado(2,2);
console.log(cuadrado1.calculaArea());
var rectangulo1 = new Rectangulo(2,3);
console.log(rectangulo1.calculaArea());
var triangulo1 = new Triangulo(10,3);
console.log(triangulo1.calculaArea());

