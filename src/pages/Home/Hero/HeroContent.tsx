import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { NewsListStarter } from "./NewsListStarter";
export const HeroContent = () => {
	return (
		<div className="container mt-9 text-white mx-auto flex z-40 justify-between flex-wrap absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
			<div className="max-w-md">
				<h1 className="xl:text-5xl lg:text-4xl text-3xl font-semibold xl:leading-[4rem] lg:leading-[3rem] leading-9">
					<TypeAnimation
						sequence={["Selamat datang di Sidorejo,"]}
						speed={55}
					/>
				</h1>
				<motion.p
					className="lg:text-2xl md:text-xl text-lg xl:leading-[4rem] lg:leading-[3rem] leading-5 sm:leading-9"
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 1.3, ease: "easeInOut" }}
				>
					desa inspiratif di kaki gunung
				</motion.p>
			</div>
			<motion.div
				initial={{ opacity: 0, x: 40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, delay: 1.3, ease: "easeInOut" }}
			>
				<h4 className="xl:leading-[4rem] lg:leading-[3rem] leading-9 lg:text-2xl md:text-xl text-lg font-semibold underline mt-5 xl:mt-0">Berita Desa</h4>
				<div className="flex flex-col lg:gap-y-9 md:gap-y-7 gap-y-5 lg:mt-3 mt-2 max-w-md">
					<NewsListStarter title={"Aksi Nyata Memperingati Hari Air Sedunia"} />
					<NewsListStarter
						title={
							"Dalam Rangka Menyambut Romadhon 1444 H, Siswa SMP N 3 Kedungbanteng Adakan Bakti Sosial"
						}
					/>
				</div>
			</motion.div>
		</div>
	);
};
