



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

 // 4:String (cadena Caracteres)
 const alumno ="Brian jesus mendooza marquez"
 let producto;
 console.warn("---Tipo de Dato - String (Cadena de caracteres");
 console.log(`el Nombre del alumno es : ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

 // Inicializamos el valor de la variable producto
 producto ="Monitor 20\"FULL HD"
 console.log(`El nombre del Producto es: ${producto},que es un tipo de dato${typeof (producto)}
 `);

 // Manupalacion los String
 console.log(`Mas adelante podremos transformar el contenido de lo String usando los metodos y funciones especificaciones , como convertir su valor a mayusculas :
 ${alumno}=>${alumno.toLowerCase()}`);
 console.log(`O ensu defecto a minusculas: ${producto.toLowerCase()}`);

 // 5. BIGIN (Numero de Mayor Aplitud)

 console.warn("---Tipo de dato = Bigint (NUMERO AMPLIO");
 const numeroGRANde = 1234567890
 const numeroGRANde2 = 12345678901234567890
 

 console.log(`El primero experimento de un numero grande es ${numeroGRANde},que si es soportado por NUmber y su tipo de dato es :
 ${typeof(numeroGRANde)}`);

 console.log(`El segundo experimento de un numero grande es ${numeroGRANde2},que si es soportado por NUmber y su tipo de dato es :
 ${typeof(numeroGRANde2)}`);
 console.log(`El tercer experimento de un numero grande es ${numeroGRANde3},que No es soportado por NUmber,perdiendo preción y su tipo de dato es :
 ${typeof(numeroGRANde3)}`);
 console.log(`El cuarto experimento de un numero grande es ${numeroGRANde4},que NO es soportado por NUmber,perdioendo precion y su tipo de dato es :
 ${typeof(numeroGRANde4)}`);

 numeroGRANde4=BigInt(1234567890123456789012345678901234567890);
 console.log(`El cuarto experimento de un numero grande es ${numeroGRANde4},que NO es soportado por NUmber,perdioendo precision y su tipo de dato es :
 ${typeof(numeroGRANde4)}`);

 numeroGRANde3=BigInt(1234567890123456789012345678901234567890);
 console.log(`El cuarto experimento de un numero grande es ${numeroGRANde3},que NO es soportado por NUmber,perdioendo precision y su tipo de dato es :
 ${typeof(numeroGRANde3)}`);

 let numeroGrande3=123456789012345678901234567890;
let numeroGrande4=1234567890123456789012345678901234567890

console.log(`El primer experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El segundo experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El tercer experimento de un número grande es: ${numeroGrande3}, que no es soportado por NUMBER, perdiendo precisión y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que si es soportado por NUMBER, perdiendo precisión y su tipo de dato es: ${typeof(numeroGrande4)}`);


numeroGrande3=BigInt("123456789012345678901234567890")
console.log(`El quinto experimento de un número grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`);

numeroGrande4=BigInt("1234567890123456789012345678901234567890")
console.log(`El sexto experimento de un número grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`);
