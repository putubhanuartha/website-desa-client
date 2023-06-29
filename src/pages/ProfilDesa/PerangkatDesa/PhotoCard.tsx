import React from "react";
import { PerangkatDesaList } from "../../../data/perangkatDesaList";
import { motion } from "framer-motion";
export type PhotoCardProps = PerangkatDesaList & {
	delayVar: number;
};
export const PhotoCard: React.FC<PhotoCardProps> = ({
	jabatan,
	nama,
	urlImg,
	delayVar,
}) => {
	const delayAnimation = 0.3;
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				duration: 0.6,
				ease: "easeInOut",
				delay: delayAnimation * delayVar,
			}}
			className="w-52"
		>
			{urlImg ? (
				<img
					src={urlImg}
					alt="imgFoto"
					className="w-52 h-64 object-cover"
				/>
			) : (
				<img
					src={"/img/perangkat-desa/profil.png"}
					alt="imgFoto"
					className="w-52 h-64 object-cover"
				/>
			)}
			<p className="my-2">{jabatan}</p>
			<p className="font-medium text-lg">{nama}</p>
		</motion.div>
	);
};
