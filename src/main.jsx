import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<BrowserRouter>
			<App />
			<Toaster />
		</BrowserRouter>
	</AuthProvider>
);
