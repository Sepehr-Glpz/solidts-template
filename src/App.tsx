import { Component, JSX, createSignal } from "solid-js";
import "@/App.scss";
import Counter from "@/components/counter";

function App(): JSX.Element {
  const [counter, setCounter] = createSignal(0);
  setInterval(setCounter, 1000, (c: number) => c + 1);

  return (
    <>
      <div>
        <h1 class="header">{counter()}</h1>
      </div>
      <Counter />
    </>
  );
}

export default App as Component;
