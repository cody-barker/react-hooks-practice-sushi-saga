import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {

  const API = "http://localhost:3001/sushis";

  const [sushiList, setSushiList] = useState([])
  const [budget, setBudget] = useState(100)
  
  useEffect(() => {
    fetch(`${API}`)
    .then(resp => resp.json())
    .then(list => setSushiList(list))
  }, [])
  
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} setBudget={setBudget} budget={budget}/>
      <Table budget={budget}/>
    </div>
  );
}

export default App;

/**
 * App
 *    Table
 *    Sushi Container
 *      Sushi
 *      MoreButton
 * 
 * 
 */