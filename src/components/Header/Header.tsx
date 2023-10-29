import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../../data/navList";
import { SubList } from "./SubList";
import { Spin as Hamburger } from "hamburger-react";
import { SlideTopBar } from "./SlideTopBar";

export const Header = () => {
	const [indexActiveEnter, setindexActiveEnter] = useState<number>(-1);
	const [topBarActive, settopBarActive] = useState(false);
	function handleMouseEnter(e: React.MouseEvent, index: number) {
		setindexActiveEnter(index);
	}
	function handleMouseLeave(e: React.MouseEvent) {
		setindexActiveEnter(-1);
	}
	return (
		<header
			id="header"
			className="fixed bg-[rgba(8,51,68,0.9)] shadow-[0px_5px_10px_4px_rgba(22,101,133,0.4)] z-50 top-0 left-0 right-0 sm:py-1.5 md:py-3 py-1 text-white"
		>
			<div className="mx-auto container justify-between flex items-center">
				<span>
					<Link className="flex items-center" to={"/"}>
						<img
							src="/logo.png"
							alt="logo"
							className="md:w-16 w-14 h-auto"
						/>
						<div>
							<p className="md:text-xl text-base  font-semibold">Sidorejo</p>
							<p className="md:text-sm text-xs">Bojonegoro, Jawa Timur</p>
						</div>
					</Link>
				</span>
				<nav className="lg:block hidden">
					<ul className="flex gap-x-5">
						{navList.map((el, index) => {
							return (
								<li className="relative containerList text-lg">
									<div
										onMouseLeave={handleMouseLeave}
										onMouseEnter={(e) => {
											handleMouseEnter(e, index);
										}}
									>
										<p>{el.titleList}</p>
										<div className="absolute h-2 w-full"></div>
										<SubList
											link={el.link}
											propsList={el.sublist}
											index={index}
											indexActiveEnter={indexActiveEnter}
										/>
									</div>
								</li>
							);
						})}
					</ul>
				</nav>

				<span className="lg:hidden block">
					<Hamburger
						toggle={settopBarActive}
						toggled={topBarActive}
						direction="left"
						size={25}
					/>
				</span>
			</div>

			<SlideTopBar
				indexActiveEnter={indexActiveEnter}
				setindexActiveEnter={setindexActiveEnter}
				settopBarActive={settopBarActive}
				topBarActive={topBarActive}
			/>
		</header>
	);
};
