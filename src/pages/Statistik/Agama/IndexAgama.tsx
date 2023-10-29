import React from "react";
import { dataAgama } from "../../../data/statistikDesa";
import { StatsComponentPage } from "../StatsComponentPage";
const IndexAgama = () => {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto py-24">
				<StatsComponentPage
					data={dataAgama}
					title="Agama"
				/>
			</div>
		</div>
	);
};

export default IndexAgama;
