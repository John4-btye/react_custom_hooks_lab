import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {

    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} />
            <label htmlFor="service">Service Number:</label>
            <input type="text" data-testid={"service"} />

        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
      </>
    );
}

export default Form;