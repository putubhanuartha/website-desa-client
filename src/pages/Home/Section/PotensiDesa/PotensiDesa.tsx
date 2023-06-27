import React, { useRef } from "react";
import { CardPotensi } from "./CardPotensi";
import { cardList } from "../../../../data/cardList";
import { useInView, AnimatePresence } from "framer-motion";
export const PotensiDesa = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section
			ref={ref}
			className="py-6 bg-slate-100"
		>
			<div className="container mx-auto">
				<h2 className="text-center text-section-1 font-semibold">
					Potensi Desa
				</h2>
				<AnimatePresence>
					{isInView && (
						<div className="flex items-center gap-y-6 my-10 flex-wrap justify-between">
							{cardList.map((el, index) => {
								return (
									<CardPotensi
										description={el.description}
										imgLink={el.imgLink}
										title={el.title}
										delay={index}
									/>
								);
							})}
						</div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};
