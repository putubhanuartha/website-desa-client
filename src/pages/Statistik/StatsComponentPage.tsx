import { DataChartType } from "../../data/statistikDesa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export type StatsComponentPageType = {
	title: string;
	data: DataChartType;
};
export const StatsComponentPage: React.FC<StatsComponentPageType> = ({
	data,
	title,
}) => {
	return (
		<div className="flex flex-col gap-y-5 items-center">
			<h1 className="capitalize text-center lg:text-3xl md:text-2xl text-xl font-medium">
				Data Statistik {title} Desa Sidorejo
			</h1>
			<div className="max-w-3xl w-full h-[80vh] flex flex-col items-center">
				<Doughnut data={data} />
			</div>
		</div>
	);
};
