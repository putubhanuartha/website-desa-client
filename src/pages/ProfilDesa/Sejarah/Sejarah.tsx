import React from "react";
import { motion } from "framer-motion";

export const Sejarah = () => {
	return (
		<section className="relative min-h-screen bg-center bg-cover saturate-150">
			<img
				src="/img/sejarah/rice-field.jpg"
				alt="rice-field"
				className="absolute z-10 top-0 h-full w-full left-0 right-0 sepia brightness-[0.25] object-cover"
			/>
			<div className="mx-auto py-10 relative container justify-between z-40 lg:top-24 md:top-20 top-8 text-white flex flex-col">
				<motion.h1
					initial={{ opacity: 0, x: -80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.3, ease: "easeInOut" }}
					className="lg:text-5xl md:text-3xl text-xl  font-semibold"
				>
					Sejarah Desa Sidorejo
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, x: 80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.3, ease: "easeInOut" }}
					className="max-w-2xl flex-col flex  md:gap-y-4 gap-y-2 lg:mt-10 mt-5  lg:text-base md:text-sm text-xs"
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
						soluta id molestias fuga voluptatibus, minima explicabo molestiae.
						Quibusdam at tenetur dicta quasi consequuntur dolor est soluta
						voluptatum recusandae itaque. Fugiat?
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
						exercitationem quam molestias adipisci quod nemo saepe nisi non aut
						corporis sed dolor excepturi necessitatibus, repellendus provident
						mollitia doloremque dolorem impedit nesciunt harum? Et autem
						quisquam, nobis omnis laudantium laborum ut possimus ea illum neque
						modi, dignissimos ipsa harum odit molestiae!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						vero fugiat porro pariatur, odit eius aliquid doloremque excepturi,
						corporis iure maiores nobis optio? Et repudiandae, quas explicabo
						accusantium, nostrum pariatur veniam quos consequatur nam hic
						asperiores distinctio accusamus non quo.
					</p>
				</motion.div>
			</div>
		</section>
	);
};
