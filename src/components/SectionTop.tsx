import React, { ReactNode } from "react";
type SectionTopProps = {
	children: ReactNode;
	style?: string;
};
export const SectionTop: React.FC<SectionTopProps> = ({ children, style }) => {
	return (
		<section className={`py-10 min-h-screen flex relative top-20 ${style}`}>
			<div className="container mx-auto">{children}</div>
		</section>
	);
};
