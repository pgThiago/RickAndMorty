import { Home } from "ui/pages/Home";

import "tailwindcss/tailwind.css";

import { CharacterContextProvider } from "data/contexts/CharacterContext";

function App() {
  return (
    <CharacterContextProvider>
      <Home />;
    </CharacterContextProvider>
  );
}

export default App;
