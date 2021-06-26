import React from "react";

function Food({name}){
  return <h1>I like {name}</h1>;
}

const foodILike = [
  {id:1,name : "Kimchi"},
  {id:2,name : "Bibimbap"},
  {id:3,name : "Samgyeopsal"}
];

function renderFood(dish){
  return <Food name={dish.name} />
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name}/>
      ))}
    </div>
    );
}

export default App;