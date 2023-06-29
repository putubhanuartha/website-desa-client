import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { navList } from "../../data/navList";
import { Link } from "react-router-dom";
export type SlideTopBarPropsType = {
	topBarActive: boolean;
	settopBarActive: React.Dispatch<React.SetStateAction<boolean>>;
	indexActiveEnter: number;
	setindexActiveEnter: React.Dispatch<React.SetStateAction<number>>;
};
export const SlideTopBar: React.FC<SlideTopBarPropsType> = ({
	indexActiveEnter,
	setindexActiveEnter,
	topBarActive,
	settopBarActive,
}) => {
	return (
		<ul
			className={`flex  ${
				topBarActive ? "max-h-[50rem] py-4" : "max-h-0 py-0"
			} gap-y-2 mx-auto container justify-between flex-col items-center  transition-all duration-300 overflow-hidden`}
		>
			{navList.map((el, index) => {
				return (
					<li
						className="relative containerList"
						onClick={() => {
							if (index === indexActiveEnter) {
								setindexActiveEnter(-1);
							} else {
								setindexActiveEnter(index);
							}
						}}
					>
						<span className="flex items-center justify-between py-1.5 bg-cyan-600 gap-x-4 px-2 rounded-md">
							<button>{el.titleList} </button>
							{index === indexActiveEnter ? (
								<IoIosArrowUp />
							) : (
								<IoIosArrowDown />
							)}
						</span>
						<ul
							className={`flex flex-col items-center transition-all mt-2 duration-300  gap-y-2 overflow-hidden ${
								index === indexActiveEnter ? "max-h-[30rem]" : "max-h-0"
							} `}
						>
							{el.sublist.map((el2) => {
								return (
									<li>
										<Link to={`${el.link}${el2.link}`}>{el2.list}</Link>
									</li>
								);
							})}
						</ul>
					</li>
				);
			})}
		</ul>
	);
};
