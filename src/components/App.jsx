import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {

  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <div>
      <h1>Repair Service Form</h1>

      <form>
        <input
          type="text"
          value={name ?? ""}
          onChange={(e) => setName(e.target.value)}
          placeholder="Customer Name"
          data-testid="name"
        />

        <input
          type="text"
          value={serviceNumber ?? ""}
          onChange={(e) => setServiceNumber(e.target.value)}
          placeholder="Service Number"
          data-testid="serviceNumber"
        />
      </form>
    </div>
  );
}

export default App;