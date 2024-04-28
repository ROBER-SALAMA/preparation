import Main from "./components/Pages/Maint";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{ className: "custom-toast" }}
      />
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <Main />
      </PrimeReactProvider>
    </>
  );
}

export default App;
