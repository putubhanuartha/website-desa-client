import React from "react";
import { CardListPotensi } from "../../../../data/cardList";
import { motion } from "framer-motion";
export type CardPotensiProps = CardListPotensi & {
	delay: number;
};
export const CardPotensi: React.FC<CardPotensiProps> = ({
	description,
	imgLink,
	title,
	delay,
}) => {
	const delayConst = 0.3;
	return (
		<motion.div
			initial={{ y: -25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: delay * delayConst }}
			className="bg-white py-5 shadow-lg rounded-lg max-w-[18rem] max-h-96 w-full mx-auto"
		>
			<img
				src={imgLink}
				alt="img-logo"
				className="w-40 object-cover block mx-auto rounded-md"
			/>
			<div className="p-5 flex flex-col justify-between">
				<p className="text-xl font-semibold">{title}</p>
				<p className="overflow-y-scroll rounded-lg border-[0.5px] border-gray-300 p-1 text-sm max-h-28">
					{description}
				</p>
				<button className="py-1 transition-all duration-150 mt-3 active:translate-x-2 px-2 hover:bg-orange-700 bg-orange-600 rounded-lg text-white">
					Lihat Selengkapnya
				</button>
			</div>
		</motion.div>
	);
};
