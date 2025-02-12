var nextOrderId = 1;
var cashInRegister = 100;
var orderQueue = [];
var menu = [
    { id: nextOrderId, name: "Margherita", price: 8 },
    { id: nextOrderId++, name: "Pepperoni", price: 10 },
    { id: nextOrderId++, name: "Hawaian", price: 10 },
    { id: nextOrderId++, name: "Veggei", price: 9 },
];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
;
function placeOrder(pizzaName) {
    var currOrderedItem = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!currOrderedItem) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += currOrderedItem.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: currOrderedItem,
        status: "ordered"
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("Order with ID ".concat(orderId, " not found."));
        return undefined;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Parameter `identifier` must be a string or a number ");
    }
}
addNewPizza({ id: nextOrderId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: nextOrderId++, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: nextOrderId++, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);
