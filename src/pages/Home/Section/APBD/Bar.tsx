import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export type BarPropsType = {
	isInView: boolean;
};
export const Bar: React.FC<BarPropsType> = ({ isInView }) => {
	return (
		<div className="overflow-hidden flex justify-start rounded-xl bg-gray-700 items-stretch w-36 h-9">
			<AnimatePresence>
				{isInView && (
					<motion.div
						className="bg-orange-600"
						initial={{ width: "0%" }}
						animate={{ width: "75%" }}
						transition={{ duration: 2 }}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};
