import React from "react";
import { Bar } from "./Bar";
import { useInView } from "framer-motion";
import { useRef } from "react";
export const APBD = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<section
			ref={ref}
			className="py-10"
		>
			<div className="container mx-auto">
				<Bar isInView={isInView} />
			</div>
		</section>
	);
};
