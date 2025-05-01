import { useState } from "react";
import MyButton from "../components/MyButton";

function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Teste deploy</h1>
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default Home;
