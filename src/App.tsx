import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { PythonServiceProvider } from "./context/TogglePythonService";

export function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <PythonServiceProvider>
        <Dashboard/>
      </PythonServiceProvider>
    </>
  );
}
