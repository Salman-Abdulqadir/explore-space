import AppRouter from "./components/router/router";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "rgb(126, 217, 87)",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "white",
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
