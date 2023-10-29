import React from "react";
import { StatsComponentPage } from "../StatsComponentPage";
import { dataPekerjaan } from "../../../data/statistikDesa";
const IndexPekerjaan = () => {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto py-24">
				<StatsComponentPage
					data={dataPekerjaan}
					title="Pekerjaan & Profesi"
				/>
			</div>
		</div>
	);
};

export default IndexPekerjaan;
