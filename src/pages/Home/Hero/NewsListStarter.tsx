import React from "react";
type NewsListStarterProps = {
	title: string;
};
export const NewsListStarter: React.FC<NewsListStarterProps> = ({ title }) => {
	return (
		<div>
			<h3 className="lg:text-2xl md:text-xl text-lg">{title}</h3>
			<button className="mt-2 hover:bg-orange-700 active:translate-x-2 transition-all duration-200 bg-orange-600 px-4 py-2 rounded-full">
				Baca selengkapnya
			</button>
		</div>
	);
};
