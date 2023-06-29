import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export type BarPropsType = {
	isInView: boolean;
	jumlahAnggaran: number;
	jumlahRealisasi: number;
};
export const Bar: React.FC<BarPropsType> = ({
	isInView,
	jumlahAnggaran,
	jumlahRealisasi,
}) => {
	function countPercentage(
		jumlahAnggaran: number,
		jumlahRealisasi: number
	): string {
		const percent = (jumlahRealisasi / jumlahAnggaran) * 100;
		if (percent > 100) return "100%";
		if (percent < 0) return "100%";
		return `${percent.toString()}%`;
	}
	return (
		<div className="overflow-hidden flex justify-start rounded-md bg-cyan-900 items-stretch w-full h-6">
			<AnimatePresence>
				{isInView && (
					<motion.div
						className="bg-orange-600"
						initial={{ width: "0%" }}
						animate={{
							width: countPercentage(jumlahAnggaran, jumlahRealisasi),
						}}
						transition={{ duration: 2 }}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};
