import React from "react";
import LembagaNews from "../LembagaNews";
import lembagaDesaList from "../../../data/lembagaDesaList";
const IndexBPD = () => {
	const bpdData = lembagaDesaList[1];
	return (
		<div className="min-h-screen">
			<div className="mx-auto container py-24 flex flex-col items-center">
				<LembagaNews
					deskripsi={bpdData.deskripsi}
					title={bpdData.title}
					urlImage={bpdData.urlImage}
				/>
			</div>
		</div>
	);
};

export default IndexBPD;
