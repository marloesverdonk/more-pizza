import React from 'react'

export default function PizzaList(props) {
  return (
    <div>
      <ul>
        {props.pizzas.map(pizza =>
          <li key={pizza.id} onClick={() => props.selectPizza(pizza.id)}>
            {pizza.name}
          </li>)}
      </ul>
    </div>
  )
} 