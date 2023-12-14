import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount((p) => p + 1)}>
      Current count: {count()}
    </button>
  );
}
