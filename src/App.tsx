
import { lazy, Suspense, useEffect } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  // Add console logs to help debug
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <LoadingProvider>
      <Suspense fallback={<div className="loading-fallback">Loading main content...</div>}>
        <MainContainer>
          <Suspense fallback={<div className="loading-fallback">Loading 3D Model...</div>}>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
