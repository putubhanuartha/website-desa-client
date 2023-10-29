import React from "react";
import { StatsComponentPage } from "../StatsComponentPage";
import { dataJenisKelamin } from "../../../data/statistikDesa";
const IndexKelamin = () => {

	return (
		<div className="min-h-screen">
			<div className="container mx-auto py-24">
				<StatsComponentPage
					data={dataJenisKelamin}
					title="jenis kelamin"
				/>
			</div>
		</div>
	);
};

export default IndexKelamin;
