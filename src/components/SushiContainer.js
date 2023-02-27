import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushiList, setBudget, budget}) {

  const [fourSushi, setFourSushi] = useState(0)

  const sushiComps = sushiList.map(sushi => <Sushi key={sushi.id} sushi={sushi} setBudget={setBudget} budget={budget}/>)

  return (
    <div className="belt">
      {sushiComps[fourSushi]}
      {sushiComps[fourSushi + 1]}
      {sushiComps[fourSushi + 2]}
      {sushiComps[fourSushi + 3]}
      <MoreButton setFourSushi={setFourSushi} fourSushi={fourSushi}/>
    </div>
  );
}

export default SushiContainer;
