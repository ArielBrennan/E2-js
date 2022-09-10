let Pizzas = [
    {id: 1, 
    nombre: 'Fugazza', 
    ingredientes: ['masa', 'queso mozzarella', 'cebolla', 'y oregano'], 
    precio: '500'}, 
    {id:2, 
    nombre: 'Cantimpalo', 
    ingredientes: ['masa', 'queso mozzarella', 'salsa de tomate', 'chorizo', 'y oregano'], 
    precio: '900'}, 
    {id:3, 
    nombre: 'Cuatro quesos', 
    ingredientes: ['masa','queso mozzarella', 'queso parmesano', 'queso fontina', 'queso gorgonzola', 'y pimienta'], 
    precio: '850'}, 
    {id: 4, 
    nombre: 'Marinara', 
    ingredientes: ['masa', 'queso mozzarella', 'salsa de tomate', 'oregano', 'ajo', 'y albahaca'], 
    precio: '550'}, 
    {id:5, 
    nombre: 'Margherita', 
    ingredientes: ['masa', 'queso mozzarella', 'salsa de tomate', 'tomate en rodajas', 'y albahaca'], precio: '600'}, 
    {id:6, 
    nombre: 'Especial', 
    ingredientes: ['masa', 'queso mozzarella', 'tomate', 'oregano', 'y jamon en trozos'], 
    precio: '700'}];




let nombre = document.querySelector('h2');
let precio = document.querySelector('h4');
let input = document.querySelector("input[type='number']");
let btn = document.querySelector('button');

/*  let nombre = document.getElementsByTagName('h2')[0];
let precio = document.getElementsByTagName('h4')[0];
let input = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName('button')[0]; */
//console.log(nombre)
//console.log(precio)
//console.log(input)
//console.log(btn)

function add(e) {
    e.preventDefault()
    const valorInput = input.value.trim();
    if (Pizzas.some(item => item.id == valorInput)) {
        nombre.innerText = `La pizza ${Pizzas.find(item => item.id == valorInput).nombre} tiene un precio de:`;
        precio.innerText = `$${Pizzas.find(item => item.id == valorInput).precio}`;
    } else {
        alert('No existe ninguna pizza con ese #id')
    };
    input.value = "";
}

btn.addEventListener("click", add);
