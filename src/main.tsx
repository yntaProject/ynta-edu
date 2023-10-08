import ReactDOM from "react-dom/client";
import { App } from "./app";
import { Provider } from "./app/providers";
import "./app/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <App/>
  </Provider>
);