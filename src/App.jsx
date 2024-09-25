import { ThemeProvider } from "./components/ThemeContext";
import AppRoutes from "./routes";

function App() {

  return (
    <>
    <ThemeProvider>
      <AppRoutes/>
    </ThemeProvider>
    </>
   
  )
}

export default App;
