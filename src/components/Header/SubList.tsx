import React, { useEffect, useState } from "react";
import { NavListType } from "../../data/navList";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
export type SublistTypeProps = {
	propsList: NavListType["sublist"];
	link: NavListType["link"];
	indexActiveEnter: number;
	index: number;
};
export const SubList: React.FC<SublistTypeProps> = ({
	propsList: props,
	index,
	indexActiveEnter,
	link,
}) => {
	const [isVisible, setisVisible] = useState(false);
	useEffect(() => {
		setisVisible(index === indexActiveEnter);
	}, [index, indexActiveEnter]);
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.ul
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					className={`absolute ${
						index === indexActiveEnter ? "flex" : "hidden"
					} flex-col gap-y-2 mt-2 bg-gray-100 text-gray-700 px-3 min-w-max py-2 rounded-lg`}
				>
					{props.map((el) => {
						return (
							<li>
								<Link
									className=" hover:border-gray-700 "
									to={`${link}${el.link}`}
								>
									{el.list}
								</Link>
							</li>
						);
					})}
				</motion.ul>
			)}
		</AnimatePresence>
	);
};
