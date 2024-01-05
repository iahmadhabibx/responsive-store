import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("./views/Home"));
const Recipe = lazy(() => import("./views/Recipe"));

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
      <Route
        path="/recipe"
        element={
          <Suspense fallback={<p>Loading</p>}>
            <Recipe />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default App;
