import React from "react";
import { SectionTop } from "../../../components/SectionTop";
import { PhotoCard } from "./PhotoCard";
import { perangkatDesaList } from "../../../data/perangkatDesaList";
export const PerangkatDesa = () => {
	return (
		<SectionTop>
			<h2 className="text-3xl font-medium text-center">
				Perangkat Desa Sidorejo
			</h2>
			<div className="grid lg:grid-cols-3 gap-5 md:place-items-start max-w-3xl mx-auto mb-5 mt-16 grid-cols-1 md:grid-cols-2">
				{perangkatDesaList.map((el, index) => {
					return (
						<PhotoCard
							jabatan={el.jabatan}
							nama={el.nama}
							urlImg={el.urlImg}
							delayVar={index}
						/>
					);
				})}
			</div>
		</SectionTop>
	);
};
