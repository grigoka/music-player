import React from "react";
import Header from "./components/header";
import Main from "./screens/main";
import { TracksProvider } from "./context/tracksContext"; // Обратите внимание на правильный путь

function App() {
  return (
    <TracksProvider>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </TracksProvider>
  );
}

export default App;
