



console.warn("tipo de dato UNDEFIEND")
let cliente;
console.log(`el cliente es:  ${cliente}`);
console.log(`el tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente ="brian "
console.log(`el cliente es : ${cliente}`);
console.log(`el tipo de dato de la variable cliente es : ${typeof(cliente)}`);

cliente =19227
console.log (`El cliente es : ${cliente}`);
console.log(`el tipo de dato de la variable cliente es :${typeof(cliente)}`);

//2.Boleano -boleanos - true/false(falso / verdadero)
console.warn("---Tipo de Dato:Bolean(boleano - true/false)")
let esPremium="No lo se";
console.log(`Es un cliente Premium?: ${esPremium}`)
console.log(`El tipo de la variable esPremium es : ${typeof(esPremium)}`);

esPremium=false;
console.log(`Es un cliente premiun ${esPremium}`);
console.log(`El tipo de dato de la vaible es esPremium es : ${typeof(esPremium)}`);
console.log(`Es un cliente premiun ${esPremium}`);
if(esPremium)
    console.log("es un cliente pago por usar el servicio");
else
console.log("Es un usuario premiun que recibe los sercios de gratuitos");

var cantidad;
const costo_producto=80.50
let saldo_cuenta= -2500.40

console.warn("---Tipo de Dato - Numbre (Numeros , Positivos , negativos,decimales,flotantes");
console.log(`tu saldo al de hoy es de: ${saldo_cuenta},(tipo de DAto =${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta : ${costo_producto}`)
cantidad =10 ;
console.log(`Has elegido comprar: ${cantidad}de producto.`)

console.log(`El importante total de la compra es ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto)
console.log(`Tu nuevo saldo es de : ${saldo_cuenta}`);
 //El cliente realiza un abono de 1500
 monto_transaccion =1500;
 console.log(`Tu abono de : ${monto_transaccion}ha recibido, tu nuevo saldo es de ${saldo_cuenta+monto_transaccion}`);