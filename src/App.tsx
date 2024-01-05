import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("./views/Home"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<p>Loading</p>}>
            <Home />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default App;
