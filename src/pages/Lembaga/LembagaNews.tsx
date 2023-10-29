import React, { useRef } from "react";
import { LembagaDesaType } from "../../data/lembagaDesaList";
import { motion } from "framer-motion";
export type LembagaNewsProps = LembagaDesaType & {};
const LembagaNews: React.FC<LembagaNewsProps> = ({
	deskripsi,
	title,
	urlImage,
}) => {
	return (
		<div className="flex max-w-2xl flex-col items-center gap-y-8">
			<motion.h1
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, ease: "easeInOut" }}
				className="text-center font-medium md:text-3xl text-2xl"
			>
				{title}
			</motion.h1>
			<motion.img
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
				src={urlImage}
				alt={title}
				className="max-w-md sm:w-full w-64 object-cover"
			/>
			<motion.p
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, delay: 0.7, ease: "easeInOut" }}
				className="text-center md:text-base text-sm"
			>
				{deskripsi}
			</motion.p>
		</div>
	);
};

export default LembagaNews;
