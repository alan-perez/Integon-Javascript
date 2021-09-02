//OOP OBJECT ORIENTED PROGRAMMING

class Animal {
  constructor(categoria) {
    this.categoria = categoria;
  }
}

class CuentaBancaria {
  constructor(s = 0, t = "M") {
    this.saldo = s;
    this.tipo = t;
  }
  deposito(cantidad) {
    this.saldo += cantidad;
  }

  retiro(cantidad) {
    this.saldo -= cantidad;
  }
}

//Tarjeta de credito hereda de la clase CuentaBancaria
class TarjetaDeCredito extends CuentaBancaria {
  constructor(s=0,t='M',fc='xx/xx/xx',pm=0){
    super(s,t);
    this.fechaDeCorte = fc;
    this.pagoMinimo =pm;
  }
  imprimeFechaDeCorte(){
  console.log(`La fecha de corte es: ${this.fechaDeCorte}`)
  }
  imprimePagoMinimo(){
    console.log(`El pago minimo es: ${this.pagoMinimo}`)

  }
}

var main = function () {
  let perro = new Animal("perro");
  let gato = new Animal("gato");

  console.log(perro.categoria);
  console.log(gato.categoria);
};
  let cuenta1 = new CuentaBancaria(5000, "M");
  cuenta1.deposito(2000);
  cuenta1.retiro(2500);
  cuenta1.deposito(4000);
  

  let cuenta2 = new CuentaBancaria(10000, "E");
  console.log(cuenta1.saldo);
  console.log(cuenta1.tipo);
  console.log(cuenta2.saldo);
  console.log(cuenta2.tipo);

  let cuenta3 = new CuentaBancaria();
  console.log(cuenta3.saldo);
  console.log(cuenta3.tipo);


let cuenta4 = new TarjetaDeCredito(5000, "TC");
console.log(cuenta4.saldo);
console.log(cuenta4.tipo);
cuenta4.imprimeFechaDeCorte();
cuenta4.imprimePagoMinimo();

let nombre = ""

main();
