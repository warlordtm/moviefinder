type Order = {
  id: number,
  pizza: string,
  status: "ordered" | "completed"
}

type Pizza = {
  id?: number
  name: string,
  price: number 
}

const menu: Array<Pizza> = []

let cashInRegister: number = 100

const orderQueue: Array<Order> = []

let nextPizzaId: number = 1
let orderId: number = 1



function addNewPizza(pizzaObj: Omit<Pizza, "id">) : Pizza
{
  const newPizza : Pizza = { id: nextPizzaId++, ...pizzaObj}
  menu.push(newPizza)
  return newPizza
}



function placeOrder(pizzaName: string) : Order | undefined
{
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
  const newOrder  : Order = {id: orderId++, pizza: pizzaName, status: "ordered"}
  orderQueue.push(newOrder)
  return newOrder
}



function completeOrder(orderId: number) : Order | undefined
{
  let completedOrder = orderQueue.find(selectedId => selectedId.id === orderId)
  if(!completedOrder){
    console.error(`${orderId} does not exist!`)
    return
  }
  return {...completedOrder, status: "completed"}
}



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
