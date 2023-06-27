import React, { useEffect, useRef } from "react";
import { Section } from "./Section";
import { Hero } from "./Hero/Hero";
import { PotensiDesa } from "./Section/PotensiDesa/PotensiDesa";
import { APBD } from "./Section/APBD/APBD";
import { TentangKami } from "./Section/TentangKami/TentangKami";

export const IndexHome = () => {
	useEffect(() => {
		document.title = "Beranda - Desa Sidorejo";
	}, []);
	return (
		<div id="home">
			<Hero />
			<TentangKami />
			<PotensiDesa />
			<APBD />
		</div>
	);
};
