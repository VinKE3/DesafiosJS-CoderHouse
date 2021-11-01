//Desafío: crear un algoritmo con un condicional
condicion = "Para ingresar a CompraGamer requiere dicha cantidad de dolares";
alert(condicion);

let nombre = prompt("ingrese su nombre");
let presupuesto = prompt("ingrese presupuesto en dolares");

if (presupuesto >= 300) {
  mensaje = "Bienvenido a CompraGamer, continue con su registro";
  let mail = prompt("Ingrese email");
  let pass = prompt("ingrese contraseña");
  let pass2 = prompt("Reingrese contraseña");

  if (pass === pass2) {
    mensaje2 = "Registro Correcto";
    mensaje3 = "ingrese tarjeta de credito y el codigo de atras :)";
    alert(mensaje2);
    alert(mensaje3);
  } else {
    mensaje2 = "Contraseñas diferentes, reintente registro";
    alert(mensaje2);
    mensaje4 =
      "Para reintentar registro, ingrese tarjeta de credito y el codigo de atras :)";

    alert(mensaje4);
  }
} else {
  mensaje = "Regrese cuando tenga mas dolares, gracias";
  alert(mensaje);
}
