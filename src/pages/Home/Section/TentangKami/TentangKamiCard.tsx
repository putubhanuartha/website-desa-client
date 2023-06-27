import React from "react";
import { TentangKamiType } from "../../../../data/tentangKamiList";
import { Link } from "react-router-dom";
export const TentangKamiCard: React.FC<TentangKamiType> = ({
	description,
	imgLink,
	title,
	urlLink,
}) => {
	return (
		<div className="flex hover:shadow-[0px_0px_8px_5px_rgba(34,211,238,0.4)] gap-x-4 group bg-slate-200 rounded-lg px-4 py-5 hover:-translate-y-1 transition-all duration-150">
			<img
				src={imgLink}
				alt="img-logo"
                className="w-10 h-10"
			/>
			<div >
				<Link className="font-semibold group-hover:underline underline-offset-4 text-lg" to={urlLink}>{title}</Link>
				<p className="mt-2 leading-7">{description}</p>
			</div>
		</div>
	);
};
