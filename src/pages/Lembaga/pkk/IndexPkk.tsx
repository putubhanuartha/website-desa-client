import React from "react";
import lembagaDesaList from "../../../data/lembagaDesaList";
import LembagaNews from "../LembagaNews";
const IndexPkk = () => {
	const pkkData = lembagaDesaList[0];
	return (
		<div className="min-h-screen">
			<div className="mx-auto container py-24 flex flex-col items-center">
				<LembagaNews
					deskripsi={pkkData.deskripsi}
					title={pkkData.title}
					urlImage={pkkData.urlImage}
				/>
			</div>
		</div>
	);
};

export default IndexPkk;
