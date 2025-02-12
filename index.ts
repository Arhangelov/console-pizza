type Pizza = {
    id: number
    name: string,
    price: number
}

type Status = "ordered" | "completed"

type NewOrder = {
    id: number,
    pizza: Pizza,
    status: Status
}

let nextOrderId = 1;
let nextPizzaId = 1;
let cashInRegister = 100;
const orderQueue: NewOrder[] = [];

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8},
    { id: nextPizzaId++, name: "Pepperoni", price: 10},
    { id: nextPizzaId++, name: "Hawaian", price: 10},
    { id: nextPizzaId++, name: "Veggei", price: 9},
];



function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza{
    const newPizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
};

function placeOrder(pizzaName: string): NewOrder | undefined {
    const currOrderedItem = menu.find(pizzaObj => pizzaObj.name === pizzaName );
    if (!currOrderedItem) {
        console.error(`${pizzaName} does not exist in the menu`);
        return
    }
        cashInRegister += currOrderedItem.price;
        const newOrder: NewOrder = {
            id: nextOrderId++,
            pizza: currOrderedItem,
            status: "ordered"
        };
        orderQueue.push(newOrder);
        return newOrder
}

function completeOrder(orderId: number): NewOrder | undefined {
    const order = orderQueue.find(order => order.pizza.id === orderId);
    if(!order) {
        console.error(`Order with ID ${orderId} not found.`);
        return undefined;
    }
    order.status = "completed";
    return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if(identifier === "string") {
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())

    } else if(typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be a string or a number ")
    }
}

// function addToArray<T>(array: T[], item: T): T[] | undefined {
//     array.push(item)
//     return array
// }

// console.log(addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 }));
// console.log(addToArray<NewOrder>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" }));


// addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
// addToArray(orderQueue, { id: nextPizzaId++, pizza: menu[2], status: "completed" })


addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch");
placeOrder("Pepperoni");


completeOrder(1)

// console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);
