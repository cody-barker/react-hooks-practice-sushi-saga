import React from "react";

function Sushi({sushi, setBudget, budget}) {

  function handleEat(e){
    //setBudget(budget => (budget - sushi.price))
      if (sushi.price < budget) {
        e.target.alt = ""
        e.target.src = ""
        setBudget(budget - sushi.price)
      }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;

