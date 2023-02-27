import React from "react";

function MoreButton({setFourSushi}) {

  function handleSushi() {
    setFourSushi(fourSushi => fourSushi + 4)
  }

  return <button onClick={handleSushi}>More sushi!</button>;
}

export default MoreButton;
