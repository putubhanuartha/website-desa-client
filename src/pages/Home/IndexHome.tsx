import { useEffect } from "react";
import { Hero } from "./Hero/Hero";
import { PotensiDesa } from "./Section/PotensiDesa/PotensiDesa";
import { APBD } from "./Section/APBD/APBD";
import { TentangKami } from "./Section/TentangKami/TentangKami";
import { HubungiKami } from "./Section/HubungiKami/HubungiKami";
import { SistemInformasiDesa } from "./Section/SistemInformasiDesa/SistemInformasiDesa";

export const IndexHome = () => {
	useEffect(() => {
		document.title = "Beranda - Desa Sidorejo";
	}, []);
	return (
		<div id="home">
			<Hero />
			<TentangKami />
			<SistemInformasiDesa />
			<PotensiDesa />

			<HubungiKami />
		</div>
	);
};
