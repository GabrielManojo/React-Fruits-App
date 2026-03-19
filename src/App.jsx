import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import React from "react";

function App() {
  const [fruits] = React.useState([
    { fruitName: "Apple", id: 1 },
    { fruitName: "Banana", id: 2 },
    { fruitName: "Cherry", id: 3 },
    { fruitName: "Strawberry", id: 4 },
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
