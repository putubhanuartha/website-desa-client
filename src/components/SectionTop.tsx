import React, { ReactNode } from "react";
type SectionTopProps = {
	children: ReactNode;
	style?: string;
};
export const SectionTop: React.FC<SectionTopProps> = ({ children, style }) => {
	return (
		<>
			<div className="h-24"></div>
			<section className={`py-10 min-h-screen flex ${style}`}>
				<div className="container mx-auto">{children}</div>
			</section>
		</>
	);
};
