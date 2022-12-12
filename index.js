class Pizza{
    constructor(id, nombre, ingredientes, precio){
        this.id = id,
        this.nombre = nombre,
        this.ingredientes = [],
        this.precio = precio
    }
}

const pizza1 = new Pizza ();
pizza1.id = 1;
pizza1.nombre = "Muzzarella";
pizza1.ingredientes = ["muzzarella" , "salsa de tomate"];
pizza1.precio = 500;

const pizza2 = new Pizza ();
pizza2.id = 2;
pizza2.nombre = 'Napolitina';
pizza2.ingredientes = ['salsa de tomate','muzzarella','tomate', 'ajo'];
pizza2.precio = 600;

const pizza3 = new Pizza();
pizza3.id = 3;
pizza3.nombre = 'Fugazeta';
pizza3.ingredientes = ['salsa de tomate', 'muzzarella', 'cebolla'];
pizza3.precio = 500;

const pizza4 = new Pizza();
pizza4.id = 4;
pizza4.nombre = 'Brasilera';
pizza4.ingredientes = ['salsa de tomate', 'muzzarella', 'anana'];
pizza4.precio = 1200;

const pizza5 = new Pizza();
pizza5.id = 5;
pizza5.nombre = 'Margarita'
pizza5.ingredientes = ['salsa de tomate', 'muzzarella', 'albahaca'];
pizza5.precio = 1000;

const pizza6 = new Pizza();
pizza6.id = 6;
pizza6.nombre = 'Jamon y morrones'
pizza6.ingredientes = ['salsa de tomate', 'muzzarella', 'Jamon', 'Morrones'];
pizza6.precio = 1500;


let Pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

const pizzasImpares = Pizzas.filter((pizza) => pizza.id % 2 == 1);
pizzasImpares.forEach(pizza => console.log(`La ${pizza.nombre} tiene un id impar`));
console.log(' ')

const pizzasBaratas = (pizza)=> pizza.precio < 600;

if (Pizzas.some(pizzasBaratas)){
    console.log(`Hay pizzas menores a $600`);
}
else{
    console.log(`No hay pizzas menores a $600`);
}
console.log(' ')

Pizzas.forEach(pizza => console.log(`La pizza ${pizza.nombre} vale $ ${pizza.precio}`));

console.log(' ')

Pizzas.forEach((pizza) => {
    console.log(`Los ingredientes de la pizza ${pizza.nombre} son:`);
    pizza.ingredientes.forEach((ingredientes) => console.log(ingredientes));
    console.log(' ');
})

localStorage.setItem('tasks', 'franco');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveLocalStorage = (tasklist) => {
    localStorage.setItem("tasks", JSON.stringify(tasklist));
}

console.log(tasks);