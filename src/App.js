import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeList from "../src/routers";
import { AppProvider } from "./context/AppContext";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }
  return (
    !loading && (
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              {routeList.map((route) => {
                const Layout = route.layout;
                const Component = route.component;
                return (
                  <Route
                    path={route.path}
                    key={route.path}
                    element={
                      <Layout>
                        <Component />
                      </Layout>
                    }
                  />
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    )
  );
}

export default App;
