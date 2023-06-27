import React, { useRef } from "react";
import { useInView } from "framer-motion";

type SectionProps = {
	children: React.ReactNode;
	style: string;
};
export const Section: React.FC<SectionProps> = ({ children, style }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section
			ref={ref}
			className={`${style}`}
		>
			{children}
		</section>
	);
};
