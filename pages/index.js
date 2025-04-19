import { useState } from "react";
import MyButton from "../components/MyButton";

function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Click the button to count {count}</h1>
      <MyButton count={count}onClick={handleClick}/>
    </div>
  );
}

export default Home;