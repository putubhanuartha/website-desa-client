import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexProfilDesa } from "./pages/ProfilDesa/IndexProfilDesa";
import { IndexLembaga } from "./pages/Lembaga/IndexLembaga";
import { IndexStatistik } from "./pages/Statistik/IndexStatistik";
import { IndexHome } from "./pages/Home/IndexHome";
import { Peta } from "./pages/ProfilDesa/Peta/Peta";
import { ErrorPage } from "./pages/ErrorPage";
import { Wilayah } from "./pages/ProfilDesa/Wilayah/Wilayah";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/profil-desa/peta",
				element: <Peta />,
			},
			{ path: "/profil-desa/wilayah", element: <Wilayah /> },
			{ path: "lembaga", element: <IndexLembaga /> },
			{ path: "statistik", element: <IndexStatistik /> },
			{ path: "", element: <IndexHome /> },
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
