//Se crea una clase para simular llenado de productos en sistema 
class Producto {
    constructor(codigo, descripcion){
        this.codigo = codigo; 
        this.descripcion = descripcion;
    }
}


let producto1 = new Producto(1, "Cargador de Celular");
let producto2 = new Producto(2, "Audifono");
let producto3 = new Producto(3, "Smartwatch");
let producto4 = new Producto(4, "Mouse");
let producto5 = new Producto(5, "Teclado");

const carrito = [];
const productoUno = [];
const productoDos = [];
const productoTres = [];
const productoCuatro = [];
const productoCinco = [];
const suma = [];

let contenido = document.getElementById("content");
let cantidad = document.getElementById("cantidad");
let desto = document.getElementById("desto");




let boton1 = document.getElementById("btn1");
boton1.addEventListener("click", () => {
    carrito.push(producto1.descripcion);
    productoUno.push(producto1.descripcion);
    contenido.innerHTML = "";
    actualizarCarrito();
    let precio = 10000; 
    precioUno = precio * productoUno.length; 
    cantidad.innerHTML = productoUno.length + " " + producto1.descripcion + " $" + precioUno;
    descuento();
    
    suma.push(precioUno);
    detalle.innerHTML = "";
    sumaTotal(); 
    
    Toastify({
        text:"Haz agregado 1 Cargador de Celular a carrito de compras", 
        duration: 3000, 
        gravity:'botton', 
        position:'left'
    }).showToast();
});
let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", () => {
    carrito.push(producto2.descripcion);
    productoDos.push(producto2.descripcion);
    contenido.innerHTML = "";
    actualizarCarrito();
    let precio = 15000; 
    precioDos = precio * productoDos.length; 
    cantidad.innerHTML = productoDos.length + " " + producto2.descripcion + " $" + precioDos;
    
    descuento();
    detalle.innerHTML = "";
    suma.push(precioDos);
    sumaTotal(); 

    Toastify({
        text:"Haz agregado 1 Audifono a carrito de compras", 
        duration: 3000, 
        gravity:'botton', 
        position:'left'
    }).showToast();
});
let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", () => {
    carrito.push(producto3.descripcion);
    productoTres.push(producto3.descripcion);
    contenido.innerHTML = "";
    actualizarCarrito();
    let precio = 5000; 
    precioTres = precio * productoTres.length; 
    cantidad.innerHTML = productoTres.length + " " + producto3.descripcion + " $" + precioTres; 
    
    descuento();
    detalle.innerHTML = "";
    suma.push(precioTres);
    sumaTotal(); 
    Toastify({
        text:"Haz agregado 1 SmartWatch a carrito de compras", 
        duration: 3000, 
        gravity:'botton', 
        position:'left'
    }).showToast();
}); 
let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", () => {
    carrito.push(producto4.descripcion);
    productoCuatro.push(producto4.descripcion);
    contenido.innerHTML = "";
    actualizarCarrito();
    let precio = 7000; 
    precioCuatro = precio * productoCuatro.length;
    cantidad.innerHTML = productoCuatro.length + " " + producto4.descripcion + " $" + precioCuatro; 
    descuento();
    detalle.innerHTML = "";
    suma.push(precioCuatro);
    sumaTotal(); 
    Toastify({
        text:"Haz agregado 1 Mouse a carrito de compras", 
        duration: 3000, 
        gravity:'botton', 
        position:'left'
    }).showToast();
}); 
let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", () => {
    carrito.push(producto5.descripcion);
    productoCinco.push(producto5.descripcion);
    contenido.innerHTML = "";
    actualizarCarrito();
    let precio = 11000; 
    precioCinco = precio * productoCinco.length; 
    cantidad.innerHTML = productoCinco.length + " " + producto5.descripcion + " $" + precioCinco; 
    descuento();
    detalle.innerHTML = "";
    suma.push(precioCinco);
    sumaTotal(); 
    Toastify({
        text:"Haz agregado 1 Teclado a carrito de compras", 
        duration: 3000, 
        gravity:'botton', 
        position:'left'
    }).showToast();
}); 


const actualizarCarrito = () => {
   
    carrito.forEach((prod) => { 
        const div = document.createElement('div'); 
        div.className = ('productoEnCarrito');
        div.innerHTML = prod; 
        contenido.appendChild(div);
    });

}
let detalle = document.getElementById("deta");
let tot = document.getElementById("total");
const sumaTotal = () => {

    suma.forEach((sum) => {
        //const div = document.createElement('div');
        //div.className = ('sumaEnCarrito');
        detalle.innerHTML = "$"+sum; 
        //detalle.appendChild(div);
       
        
    })
     };


 let total = document.getElementById("total"); 
 total.addEventListener("click", () => {
 Toastify({
    text:"Su pago ha sido exitoso, se agradece su compra", 
    duration: 3000, 
    gravity:'botton', 
    position:'left'
}).showToast();

 
}); 






//Se aplica operadores avanzados
const descuento = () => {
carrito.length > 5 ? desto.innerHTML = "Felicitaciones estimado cliente debido a la compra de más de 5 productos tendrá un descuento de 10%" : desto.innerHTML = "Estimado cliente recuerde que si compra 6 o más productos tendrá un descuento de 10%" 
}; 

const lista = document.getElementById("lista");

fetch("/JS/data.json")
.then(response => response.json())
.then(data => {
    data.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${producto.num} </h2>
        <p>${producto.descripcion} </p>
        <img src= ${producto.url} width="80" height="80">
        <b>$${producto.precio}</b>
        
        
        
        `; 
        lista.append(div);
    });
});








