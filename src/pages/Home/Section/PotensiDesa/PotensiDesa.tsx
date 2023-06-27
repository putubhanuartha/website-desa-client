import React from "react";
import { Section } from "../../Section";
import { CardPotensi } from "./CardPotensi";
import { cardList } from "../../../../data/cardList";

export const PotensiDesa = () => {
	return (
		<Section style="py-6 bg-slate-100">
			<div className="container mx-auto">
				<h2 className="text-center text-3xl font-semibold">Potensi Desa</h2>
				<div className="flex items-center gap-y-6 my-10 flex-wrap justify-between">
					{cardList.map((el) => {
						return (
							<CardPotensi
								description={el.description}
								imgLink={el.imgLink}
								title={el.title}
							/>
						);
					})}
				</div>
			</div>
		</Section>
	);
};
