import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import User from "./Components/User";
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <User />
      </QueryClientProvider>
    </div>
  );
}

export default App;
