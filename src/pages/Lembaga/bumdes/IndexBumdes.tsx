import React from "react";
import lembagaDesaList from "../../../data/lembagaDesaList";
import LembagaNews from "../LembagaNews";
const IndexBumdes = () => {
	const bumdesData = lembagaDesaList[2];
	return (
		<div className="min-h-screen">
			<div className="mx-auto container py-24 flex flex-col items-center">
				<LembagaNews
					deskripsi={bumdesData.deskripsi}
					title={bumdesData.title}
					urlImage={bumdesData.urlImage}
				/>
			</div>
		</div>
	);
};

export default IndexBumdes;
