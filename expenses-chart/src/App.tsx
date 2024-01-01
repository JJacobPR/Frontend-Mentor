import "./App.scss";
import Balance from "./components/Balance";
import Spendings from "./components/Spendings/Spendings";

function App() {
  return (
    <main className="app">
      <Balance />
      <Spendings />
    </main>
  );
}

export default App;
