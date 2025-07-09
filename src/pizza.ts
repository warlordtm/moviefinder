/* //TYPE FOR ORDER
type Order = {
  id: number,
  pizza: string,
  status: "ordered" | "completed"
}

//TYPE FOR PIZZA
type Pizza = {
  id: number
  name: string,
  price: number 
}

const menu: Array<Pizza> = []

let cashInRegister: number = 100
console.log(cashInRegister)

const orderQueue: Array<Order> = []

let nextPizzaId: number = 1
let orderId: number = 1



//FUNCTION TO ADD NEW PIZZA TO THE MENU ARRAY
function addNewPizza(pizzaObj: Omit<Pizza, "id">) : Pizza
{
  const newPizza : Pizza = { id: nextPizzaId++, ...pizzaObj}
  menu.push(newPizza)
  return newPizza
}



//FUCNTION TO PLACE AN ORDER AND RETURN AN ARRAY OF ORDERED PIZZA'S
function placeOrder(pizzaName: string) : Order | undefined
{
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
  console.log(selectedPizza)
  const newOrder  : Order = {id: orderId++, pizza: pizzaName, status: "ordered"}
  orderQueue.push(newOrder)
  return newOrder
}



//FUNCTION TO COMPLETE AN ORDER AFTER BEING PLACED
function completeOrder(orderId: number) : Order | undefined
{
  let completedOrder = orderQueue.find(selectedId => selectedId.id === orderId)
  if(!completedOrder){
    console.error(`${orderId} does not exist!`)
    return
  }
  return {...completedOrder, status: "completed"}
}



//FUNCTION TO GET THE PIZZA DETAILS AVAILABLE IN THE PIZZA MENU ARRAY
function getPizzaDetail(identifier: string | number) : Pizza | undefined
{
  if(typeof identifier === "string")
  {
    const getPizza = menu.find(pizza => identifier === pizza.name )
    if(!getPizza)
    {
      console.error(`${identifier} pizza does not exist in database!`)
    }
    console.log(getPizza)
    return getPizza
  } else if(typeof identifier === "number")
  {
    const getPizza = menu.find(pizza => identifier === pizza.id )
    if(!getPizza)
    {
      console.error(`Pizza with id number ${identifier} does not exist in database!`)
    }
    console.log(getPizza)
    return getPizza
  } else {
    throw new TypeError("Parameter Invalid!");
    
  }
}



addNewPizza({ name:"cheeseroll", price:14})
addNewPizza({ name:"pizza", price: 12})
addNewPizza({ name:"pepperoni", price: 15})

placeOrder("macaroni")
placeOrder("pizza")
placeOrder("pepperoni")

completeOrder(3)

getPizzaDetail("pizza")
getPizzaDetail(1)
getPizzaDetail(3)
 */