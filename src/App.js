
import React from "react";
import "./App.css";
import HomeTodo from "./pages/HomeTodo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='container'>
          <HomeTodo />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;