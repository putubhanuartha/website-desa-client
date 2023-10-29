import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexHome } from "./pages/Home/IndexHome";
import { Peta } from "./pages/ProfilDesa/Peta/Peta";
import { ErrorPage } from "./pages/ErrorPage";
import { Wilayah } from "./pages/ProfilDesa/Wilayah/Wilayah";
import { Sejarah } from "./pages/ProfilDesa/Sejarah/Sejarah";
import { PerangkatDesa } from "./pages/ProfilDesa/PerangkatDesa/PerangkatDesa";
import VisiMisi from "./pages/ProfilDesa/VisiMisi/VisiMisi";
import IndexBPD from "./pages/Lembaga/bpd/IndexBPD";
import IndexBumdes from "./pages/Lembaga/bumdes/IndexBumdes";
import IndexPkk from "./pages/Lembaga/pkk/IndexPkk";
import IndexAgama from "./pages/Statistik/Agama/IndexAgama";
import IndexKelamin from "./pages/Statistik/JenisKelamin/IndexKelamin";
import IndexPekerjaan from "./pages/Statistik/Pekerjaan/IndexPekerjaan";

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
			{ path: "/profil-desa/sejarah", element: <Sejarah /> },
			{ path: "/profil-desa/perangkat-desa", element: <PerangkatDesa /> },
			{ path: "/profil-desa/visi-misi", element: <VisiMisi /> },
			{ path: "/lembaga/bpd", element: <IndexBPD /> },
			{ path: "/lembaga/bumdes", element: <IndexBumdes /> },
			{ path: "/lembaga/pkk", element: <IndexPkk /> },
			{ path: "/statistik/agama", element: <IndexAgama /> },
			{ path: "/statistik/jenis-kelamin", element: <IndexKelamin /> },
			{ path: "/statistik/pekerjaan", element: <IndexPekerjaan /> },
			{ path: "", element: <IndexHome /> },
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
