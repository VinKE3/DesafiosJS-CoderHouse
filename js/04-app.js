alert("Bienvenido a VinKE´s calculator");
calculo =
  "ingrese 1: para sumar , 2: para restar , 3: para multiplicar, 4: para dividir";
alert(calculo);
let ingrese = prompt("ingrese tipo de calculo");
if (ingrese == 1) {
  function suma() {
    let a = prompt("ingrese primer numero");
    let b = prompt("ingrese segundo numero");
    let resultado = parseInt(a) + parseInt(b);
    console.log(`La suma: ${a} + ${b} es igual a ${resultado}`);
    alert(`La suma: ${a} + ${b} es igual a ${resultado}`);
  }

  suma();
} else if (ingrese == 2) {
  function resta() {
    let a = prompt("ingrese primer numero");
    let b = prompt("ingrese segundo numero");
    let resultado = parseInt(a) - parseInt(b);
    console.log(`La resta: ${a} - ${b} es igual a ${resultado}`);
    alert(`La resta: ${a} - ${b} es igual a ${resultado}`);
  }
  resta();
} else if (ingrese == 3) {
  function multi() {
    let a = prompt("ingrese primer numero");
    let b = prompt("ingrese segundo numero");
    let resultado = parseInt(a) * parseInt(b);
    console.log(`La multiplicacion: ${a} * ${b} es igual a ${resultado}`);
    alert(`La multiplicacion: ${a} * ${b} es igual a ${resultado}`);
  }
  multi();
} else if (ingrese == 4) {
  function divi() {
    let a = prompt("ingrese primer numero");
    let b = prompt("ingrese segundo numero");
    let resultado = parseInt(a) / parseInt(b);
    console.log(`La divicion: ${a} / ${b} es igual a ${resultado}`);
    alert(`La divicion: ${a} / ${b} es igual a ${resultado}`);
  }
  divi();
}
