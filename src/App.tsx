import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import InteractiveModelViewer from "./components/3DConfigurator/ModelViewer";
function App() {
  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-44 w-44 border-t-2 border-b-2 border-white"></div>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configurator" element={<InteractiveModelViewer />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
