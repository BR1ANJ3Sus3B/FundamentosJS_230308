const bg="linear-gradient(11deg, rgba(2, 0, 26, 1) 0%, rgba(9, 9, 121, 1) 33%, rgba(0, 212, 255, 1)86%)";
const style_console= `background: ${bg}; color:white;
border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weigth: bold;`

//Personalizacion de las salidad a consola 
console.warn("---Practica 05: Repaso de objetos en javaScript");

//VARIABLES INDEPENDIENTES

console.log("%c1. - Variables Independientes ", style_console);

//Declaramos valores ibndependientes relacionados a un PRODUCTO
 let Producto_Nombre= "Computadora Gammer Laptop 17/";
 let Producto_Marca= "ASUS";
 let Producto_Modelo="TUF 17";
 let Producto_Precio= 15749.50;
 let Producto_Disponibilidad= true;
 let Producto_SKU= Symbol("TUF707VV-HX221W");
 let Producto_Stock= 15;
 let Producto_Imagen=null;
 let Producto_Barcode;
 let Producto_Categorias=["Electonicos","Computacion","Gamming","Promociones Buen Fin","Mejor"];

 //Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos de PRODUCTO son /n
    Nombre: ${Producto_Nombre},Tipo de dato <${typeof(Producto_Nombre)}
    Marca: ${Producto_Marca},Tipo de dato <${typeof(Producto_Marca)}
    Modelo: ${Producto_Modelo},Tipo de dato <${typeof(Producto_Modelo)}
    Precio: ${Producto_Precio},Tipo de dato <${typeof(Producto_Precio)}
    Disponibilidad: ${Producto_Disponibilidad},Tipo de dato <${typeof(Producto_Disponibilidad)}
    Stock: ${Producto_Stock},Tipo de dato <${typeof(Producto_Stock)}
    Imagen: ${Producto_Barcode},Tipo de dato <${typeof(Producto_Barcode)}
    Barcone: ${Producto_Imagen},Tipo de dato <${typeof(Producto_Imagen)}
    Categorias : ${Producto_Categorias},Tipo de dato <${typeof(Producto_Categorias)}
   
    `)
    console.log("En el caso del sku al ser un symbol,no se puede concatenar a la cadena de impresion anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));
    
    // Ahora lo declaramos con un OBJETO
    let Producto =
    {
      
   ID:3316,
    Nombre : "Tenis Deportivos",
    Marca: "Nike",
    Modelo:"Jordan '24 ",
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen:"../assets/products/sneakers/JORDAN.PNG",
    Barcode:null,
    categorias:["Deportes","Tenis","Juvenil" ]

}

// Ahora leemos el objeto completo

console.table(Producto);
 // Paara acceder a las propiedades del objeto utilizammos un "." y el nombre de la propiedad a leer

 console.log("Accediendo a propiedades especificas del PRODUCTO")
 console.log(`Nombre Completo del PRODUCTO: ${Producto_Nombre} ${Producto.Marca} ${Producto.Modelo}`)
 console.log(`Precio: ${Producto.Precio}`);
 if (Producto.Disponibilidad ==0){
console.log (`Estatus: Agotado`)
}else{
con
}

console.log("%c3. - Destruccion de objetos  ", style_console);
 let Productos2 =
 
 {
    Clave:316,
    Nombre:"Lentes para sol",
    Marca: "Oakley",
    Modelo:"QNTM Kato",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock:5,
    SKU:"009481D-0356",
    Imagen:"../assets/productd¿s/sunglasses/KatoRed.png",
    Barcone:8555565689568,
    categorias:["Deportes","Lentes","Hombre","Accesorios" ]



 }
 let comprador =
 {
    clave:3122,
    Nombre:"Brian Jesus",
    Apellidos:"Mendoza Marquez",
    Tipo:"Frecuente",
    correo:"jesusmendoza@gmail.com",
    PaisOrigen:"Mexico",
    SaldoActual:14000.00



 }
 let Pedido={
ID:3316,
Producto_Clave:316,
Comprador_Clave:3122,
Cantidad:2,
Estatus:"Carritos de Compras",
TipoPago:"Tarjeta de credito"

 }

 // En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

 
 let{Precio:Producto_Precio2}= Productos2;
 let{Cantidad:Pedido_Cantidad}= Pedido;
 let{SaldoActual:Cliente_SaldoActual}=comprador;
 let Costo_compra= Producto_Precio* Pedido_Cantidad;


 console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad}unidades,con un costo total de:$${(Costo_compra)}`)
 if(Costo_compra< Cliente_SaldoActual)
console.log("El cliente tiene saldo suficiente");

 else 
 console.log("El cliente tiene saldo suficiente");

 //Actualizar el valor de los objetos

 console.log("%c4.-Actualizacion de los valores de las propiedades de un objeto",style_console);

 console.log(`El objeto actualmente tiene los siguientes valores `)
 console.log(JSON.stringify(Productos2));
 console.log(`Por cuestiones de inflacion el costo del priducto ha cambiado y debe ser acyualizado... de $6,829.00 a $6,915.50`)
 
 //Para podificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada 
 Productos2.Precio=6915.50;
 console.log(`Los nuevos valores del producto son: `)
 console.log(Productos2);

 //¿Puedo cambiar no solo el valor si no el tipo de dato de un Objeto en JavaScript?
 console.log(`---------------------------------------------------------------------------`)
 console.log(`El objetoi actualmente tiene los siguientes valores `)
let tipoDisponibilidad = typeof(Producto.Disponibilidad);
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Productos2, null, 2));//Disponibilidad Booleano
 Productos2.Disponibilidad="si";
 let nuevoTipoDisponiobilidad = typeof(Productos2.Disponibilidad)
 console.log(Productos2);
console.log(`El tipo de dato de la disponibilidad es:${nuevoTipoDisponiobilidad}`)

// A grrgar nueva propiedad al objeto

console.log("%c5.-Actualizacion de los valores de las propiedades de un objeto",style_console);
//para agregar una nueva propíedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propípedasd con su valor por defecto 
comprador[`Direccion`]="Av.Benito Juarez No. 1525,Interior 4D,xicotepec de Juarez,Puebla,Mexico"
comprador[`Tipo`]="Nuevo Cliente"
comprador[`Actividades`]=true
comprador[`TotalCompras`]=3516.25
console.log("Despues de haber agregado las proíedades Direccion,tipo,actividadesReciente y TotalCompras.......")
console.table(comprador)

//Eliminar proíedades existentes de un objeto

console.log("%c6.-Eliminar propiedades existenciales de un objeto",style_console);
console.log("La estructura y valores delobjetos PEDIDO son previos ala modificacion")
console.table(Pedido)
delete Pedido.TipoPago
console.log("Despues de la modificacion...")
console.table(Pedido)

//

console.log("%c7.Metodos para controlar la mutabilidad de los Objetos,Conhelacion (FREEZE)",style_console);
//si deseaamos no ppermitir que los objetos sean modificados bni en estructuraciom,ni en valor,utilizaremos el metodo FREEZE(congelar)
console.log(`La estrura actual del Objeto COMPRADOR es: `)
console.table(comprador)
Object.freeze(comprador)
//Intebntaremos agregar,eliminar o modificar los valores de sus propiedaaades

comprador.FechaUltimaCompra="05/09/2024 10:15:25"
delete comprador.Tipo;
comprador.Direccion="calle 16 de Septiembre #102,col.Manantiales,Huachinango ,Puebla,Mexico";
console.log(`Verificamos si se realizaron los cambios en el Objeto COMPRADOR`);
console.table(comprador)

console.log("%c8.Metodos para controlar lamutabilidad de los objetos,Sellados(SEAL)",style_console);
//sIN EMBARGO , EN ELCASO QUE DESEAMOS PODIFIN¿CAR LOS VALORES DELLAs propiedades  del on¿bjeto,pero no su estructura,usaremos SEAL

console.log("Objeto antes de ser modificados: ")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPedido`]="23/09/2024 11:05:03"
delete Pedido [`Cantidad`]
console.log(`Verificamos si se realizaron los cambios en el objeto PEDIDO:`)
console.table(Pedido)
//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad= 5
console.log(`Verificamos si se realizaron los cambios en el objeto PEDIDO:`)
console.table(Pedido)

//Desetructuracion de 3 o mas objetos
console.log("%c9.Destruccion de 2 o mas objetos",style_console);

let{Precio: ProductoPrecio,Marca:productoMarca}=Producto
let{correo: clienteCorreo,PaisOrigen: clientePais, SaldoActual:clienteSaldo,Tipo:clienteTipo}=comprador

// Transformar valores cuantitativos en cualitativos

if(ProductoPrecio>2000)
ProductoPrecio="caro"
else
ProductoPrecio="Barato"
if(clienteSaldo>0)
   clienteSaldo="A favor"
else if(clienteSaldo<0)
   clienteSaldo="En contra"
else
clienteSaldo="Sin deuda"
//transformar valores cualitativos en cuantitativos

let clienteNivel;

if (clienteTipo=="Premium")
   clienteNivel =1
if(clienteTipo=="Freemium")
   clienteNivel=2
if (clienteTipo=="No identificado")
   clienteNivel =3

//Clsificam,os al cliente por su pais de Origen
if(clientePais=="Mexico")
   clientePais="Nacionalidad"
else
clientePais="Extranjero"

//oje - Objetc Literal Enhacement
let datosClientePromociones ={clienteCorreo,clientePais,clienteNivel,clienteSaldo,productoMarca,ProductoPrecio}

//El nuevo objeto que creamos seria un ejemplo de la informacion que enviaremos al area de marketing para la la difucion de promociones
console.log("Los datos del cliente y sus habitos de compra son: ")
console.table(datosClientePromociones)

//Operaciones sobre Objetos
//Union de Objetos
console.log("%c10.Union de Objetos usando el metodo de asignacion (ASSING)",style_console);

console.log("Imprimimos la estructura y valores del objeto PRODUCTO")
console.table(Producto);

console.log("Imprimimos la estructura y valores del objeto PEDIDO")
console.table(Pedido);

//Suponiendo que el usuarios ya realizo el pago el pédido se convertira en una VENTA que requiere informacion de ambos objetos
//SuponiendO nque el usuario ya realizo el pago se convertira en una VENTA que requiere informacion de ambos objetos
//IMPORTANTE:ASSIGN ,NO SOLO PERMITE LA FUISION DE 2 O MAS OBJETOS,tambien mita los objetos originales ,perdiendo el valor original del ID 
const Venta = Object.assign(Producto,Pedido)
console.log("Consultamos este nuevo objeto VENTA")
console.table(Venta)
//

//Union de Objetos usando SPREAD para evitar la perdidad de informacion con objetos que comparten el mismo nombre en sus propiedades 


console.log("%c11.Union de Objetos usando el SPREAD OPERATOR(...)",style_console);

//pARCHAMOS EL ERROR ,REINOICANDO EL VALOR DEL PRODUCTO ID al original producto.ID=100;

console.table(Producto)
console.table(comprador)
console.table(Pedido)

const Venta2 =
{
   producto: {...Producto},
   comprador: {...comprador},
   pedido: {...Pedido}
}
console.log("Funcionamos los 3 objetos en uno nuevo,sin perdida de informacion")
console.log(Venta2)
console.table(Venta2)

console.log("%c12.Mutabilidad POST Union de Objetos ",style_console);
//vamos a verificar el estatus de mutabilidad de los objetos 
console.log("Vamos a verificar el estatus de muytabilidad del objeto PEDIDO")
console.log(`Esta el objeto de Pedido congelado ? :${Object.isFrozen(Pedido)}`)
console.log(`Esta el objeto de Pedido sellado ? :${Object.isSealed(Pedido)}`)

 
console.log("Vamos a verificar el estatus de muytabilidad del objeto COMPRADOR")
console.log(`Esta el objeto de Pedido congelado ? :${Object.isFrozen(comprador)}`)
console.log(`Esta el objeto de Pedido sellado ? :${Object.isSealed(comprador)}`)

console.log("Vamos a verificar el estatus de muytabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de Pedido congelado ? :${Object.isFrozen(Producto)}`)
console.log(`Esta el objeto de Pedido sellado ? :${Object.isSealed(Producto)}`)

//Modificamos la estrtuctura de productos,agregando una nueva propiedad
Producto[`isLegacy` ]=false;
console.log(Producto)
console.log(Venta2)











