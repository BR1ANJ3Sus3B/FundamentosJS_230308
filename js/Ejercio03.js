// Repaso de Objetos
const bg ="linear-gradient(11deg,rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`background:${bg};color:white; border-radius : 6px;padding:4px;font-sixe:1.0rem`

//Personalización de las salidas a Consola
console.warn("practica 05 : repaso de obejetos en Java Script")

//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);

//Declaramos valores independientes relacionadas a un PRODUCTO
let Producto_Nombre = "Computadora Gamer Laptop 17\"";
let Producto_Marca = "ASUS";
let Producto_Modelo = "TUF 17"
let Producto_Precio = 15749.50
let Producto_Disponibilidad = "true";
let Producto_SKU = Symbol("TUF707VV-HX221W");
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categoria = ["Electrónicos" , "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];

// Accedemos a los valores de las caráteristicas del producto de manera independiente
console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre} , Tipo de dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de dato <${typeof(Producto_Disponibilidad)}>
    
    Stock: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Imagen: ${Producto_Imagen}, Tipo de dato <${typeof(Producto_Imagen)}>
    Barcode: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    Categoria: ${Producto_Categoria}, Tipo de dato <${typeof(Producto_Categoria)}>
    `);

console.log("En el caso del SKU AL SER UN SYMBOL NO SE PUEDE CONCATENAR  A LA CADENA DE IMPRESIÓN ANTERIOR")
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));



// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto ", style_console)
let Producto =
{
    Nombre : "Tenis Deportivos",
    Marca: "Nike",
    Modelo : "Jordan ´24",
    Precio: 3361.25 ,
    Disponibilidade: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "../assets/products/sneakers/JORDAN.png",
    Barcode: null,
    Categorias: ["Deportes", "Juvenil"]
}


// Ahora leemos el objeto completo
console.table(Producto);

// Para accceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer

console.log("Accediendo a las propiedades especifícas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidade == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles`)

// Destructuración de Objetos
console.log("%c3.- Desctructuración de Objetos ", style_console)
let Producto2 =
{
    Clave: 316,
    Nombre : "Lentes Deportivos",
    Marca: "Oakley",
    Modelo : "QNTM Kato",
    Precio: 6829.00 ,
    Disponibilidade: true,
    Stock: 5,
    SKU: "OO0481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRed.png",
    Barcode: 888392491626,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador =
{
    Clave: 3216,
    Nombre: "Amaury",
    Apellidos: "Romero Martítnez",
    Tipo: "Frecuente",
    Correo: "230190@utxicotepec.edu.mx",
    PaisOrigen: "México",
    SaldoActual: 14000.00,
    FechaUltimaCompra:"03/12/2023 10:15:25"
}

let Pedido = {
    Producto_Clave: 316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de Compra"
}

// En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor
let {Precio: producto_Precio} = Producto2;
let {Cantidad: Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra = producto_Precio * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : ${Costo_Compra}`);
if (Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente");

//
console.log("%c7.- Métodos para controlar la mutabilidad de los Objetos, congelación FREEZE",style_console);

//Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizamos el metodo FREEZE (Congelar)
console.log(`La estructura actualdel objeto Comprador es: `);
console.table(Comprador);
Object.freeze(Comprador);
//Intentamos agregar, eliminar o modifocar los valores de sus propiedades
Comprador.FechaUltimaCompra="05/09/2024 10:15:25";
delete Comprador.Tipo;
Comprador.Direccion= "Calle Ameles s/n, Col.Azaleas";
console.log("verificamos si se realizaronn los cambios en el objeto de Comprador");
console.table(Comprador);

console.log("%c8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)",style_console);
//Sin embargo, en el caso que desemos poder modificar los valores del las propiedades del Objeto, pero no por su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado");
console.table(Pedido);
//Sellamos el objeto
Object.seal(Pedido);
//Intentamos modificar su estructura
Pedido[`FechaPedido`]="25/09/2024 11:05:03";
delete Pedido[`Cantidad`]
console.log('Verificamos si se realizaron los cambios en el objeto PEDIDO:');
console.table(Pedido);
//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad=5;
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO');
console.table(Pedido);

//Destructuración de 2 o más objetos
console.log("%c9.- Destructuración de 2 o más objetos",style_console);

let{Precio:productoPrecio,Marca:productoMarca}=Producto;
let{Correo:clienteCorreo, PaisOrigen:clientePais, SaldoActual:clienteSaldo,Tipo:clienteTipo}=Comprador;

if(productoPrecio>20000)
    productoPrecio = "caro"
else
productoPrecio ="Barato"
if(clienteSaldo > 0 )
    clienteSaldo = "a favor"
else if (clienteSaldo < 0)
    clienteSaldo = "En contra"
else
clienteSaldo= "sin deudo"

let clieteNivel;
if(clienteTipo == "premium")
    clieteNivel = 1
if(clienteTipo == "freemium")
    clieteNivel = 2
if(clienteTipo == "No identificado")
    clearInterval = 3

//clasificaion al cliente por su pais de origen

if(clientePais == "Mexico")
    clientePais = "Nacional"
else
clientePais="Extrangero"

//OLE - Object literal Enhacement

let datoClientePromociones ={clienteCorreo,clientePais,clieteNivel , clienteSaldo,productoMarca,productoPrecio}
//El nuevo objeto que creamos seria un ejemplio de la informacion que eviariamos al area de marketing para la difunsion de promociones 
console.log("los datos del cliente y sus habitos de compra son :")
console.table (datoClientePromociones)

console.log("%c10.-Union de objetos de usando el metodo de asignacion (Assing)",style_console);

console.log("Imprimir la estructura y valores del objeto PEDIDO")
console.table(Pedido);
//Suponiedo que el usuario ya realizo el pagoel pedido se conviertira en una venta que requiere informacion de ambos objetos 
const Venta =Object.assign(Producto, Pedido);
console.log("consultamos este nuevo objeto VENTA")
console.table(Venta);