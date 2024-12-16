import "./App.css";
import Users from "./components/users";
import Main from "./pages/main";
import ModalContextProvider from "./store/modalContext";

function App() {
  return (
    <ModalContextProvider>
      <Users />
    </ModalContextProvider>
  );
}

export default App;
