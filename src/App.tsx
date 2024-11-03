import "./App.css";
import { useStore } from "./zustand/store";

const App = () => {
  return (
    <>
      <CountState />
      <CountDispatch />
    </>
  );
};

const CountState = () => {
  const count = useStore((state) => state.count);
  return <div>{count}</div>;
};
const CountDispatch = () => {
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  return (
    <div>
      <button type="button" onClick={increase}>
        increase
      </button>
      <button type="button" onClick={decrease}>
        decrease
      </button>
    </div>
  );
};

export default App;
