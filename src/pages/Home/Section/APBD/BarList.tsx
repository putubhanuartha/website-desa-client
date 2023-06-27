import React from "react";
import { Bar } from "./Bar";
import { Anggaran } from "../../../../data/APBDdesaList";
export type BarListProps = Anggaran & {
	isInView: boolean;
};
import formatCurrency from "../../../../utils/currencyFormaterr";
export const BarList: React.FC<BarListProps> = ({
	judulAnggaran,
	jumlahAnggaran,
	jumlahRealisasi,
	isInView,
}) => {
	return (
		<div>
			<p className="font-medium">{judulAnggaran}</p>
			<p className="text-sm">
				{formatCurrency(jumlahRealisasi)} | {formatCurrency(jumlahAnggaran)}
			</p>
			<Bar
				isInView={isInView}
				jumlahAnggaran={jumlahAnggaran}
				jumlahRealisasi={jumlahRealisasi}
			/>
		</div>
	);
};
