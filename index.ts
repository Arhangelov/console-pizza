type Menu = {
    name: string,
    price: number
}

type NewOrder = {
    id: number,
    pizza: Menu,
    status: string
}

const menu: Menu[] = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaian", price: 10},
    {name: "Veggei", price: 9},
];

let cashInRegister = 100;
const orderQueue: NewOrder[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
};

function placeOrder(pizzaName) {
    const currOrderedItem = menu.find(pizzaObj => pizzaObj.name === pizzaName );
    if (!currOrderedItem) {
        console.log(`${pizzaName} does not exist in the menu`);
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
    const order = orderQueue.find(order => order.id === orderId);
    if(!order) {
        console.log(`Order with ID ${orderId} not found.`);
        return undefined;
    }
    order.status = "completed";
    return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
