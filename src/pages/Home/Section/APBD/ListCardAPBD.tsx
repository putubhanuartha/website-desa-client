import React from "react";

import { BarList } from "./BarList";
import { APBDDesaType } from "../../../../data/APBDdesaList";
export type ListCardProps = APBDDesaType & {
	isInView: boolean;
};
export const ListCardAPBD: React.FC<ListCardProps> = ({
	tahun,
	jenisAPBD,
	listAnggaran,
	isInView,
}) => {
	return (
		<div className="bg-slate-100 p-3 rounded-xl shadow-lg">
			<div>
				<p className="text-xl font-medium">
					APBD {tahun} {jenisAPBD}
				</p>
				<p>Realisasi | Anggaran</p>
			</div>
			<div className="mt-5 flex flex-col gap-y-5">
				{listAnggaran.map((el) => {
					return (
						<BarList
							isInView={isInView}
							judulAnggaran={el.judulAnggaran}
							jumlahAnggaran={el.jumlahAnggaran}
							jumlahRealisasi={el.jumlahRealisasi}
						/>
					);
				})}
			</div>
		</div>
	);
};
