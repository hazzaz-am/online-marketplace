import { createRoot } from "react-dom/client";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import { App } from "./App.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
			<Toaster />
		</QueryClientProvider>
	</AuthProvider>
);
