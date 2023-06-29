import React, { useRef, useState } from "react";
import { SectionTop } from "../../../components/SectionTop";
import "./Peta.css";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import osmProvider from "./osmProvider";
import { TileLayer, MapContainer } from "react-leaflet";
export const Peta = () => {
	const [center, setCenter] = useState({ lat: -7.2309204, lng: 111.9144848 });
	const ZOOM_LEVEL = 20;
	const mapRef = useRef(null);
	return (
		<SectionTop>
			<div className="mx-auto">
				<h1 className="text-center text-3xl font-medium mb-3">
					Peta Desa Sidorejo
				</h1>
				<div className="my-3">
					<p className="text-lg font-medium">Koordinat relatif dengan titik kantor desa</p>
					<p>Garis Bujur : {center.lng}</p>
					<p>Garis Lintang : {center.lat}</p>
				</div>
				<MapContainer
					className="mb-5"
					center={center}
					zoom={ZOOM_LEVEL}
					ref={mapRef}
				>
					<TileLayer
						attribution={osmProvider.mapTiler.attribution}
						url={osmProvider.mapTiler.url}
					/>
				</MapContainer>
				<Link
					className="underline underline-offset-4 bg-cyan-900 text-white px-2 py-1.5 rounded-md"
					to={"https://goo.gl/maps/BB9qFWnBStsTni139"}
				>
					Google Maps
				</Link>
			</div>
		</SectionTop>
	);
};
