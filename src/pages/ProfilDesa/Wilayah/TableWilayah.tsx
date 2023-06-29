import React from "react";
import { ColumnWilayah } from "../../../data/wilayahDesaList";
type TableWilayahProps = {
	col1: string;
	col2: string;
	col3: string;
	objectList: {};
};
export const TableWilayah: React.FC<TableWilayahProps> = ({
	col1,
	col2,
	col3,
	objectList,
}) => {
	return (
		<table className="table-fixed w-full border-2 border-gray-300 mt-1">
			<thead className="border-2 border-gray-300 bg-gray-300">
				<tr>
					<th className="border-2 border-gray-300 capitalize">{col1}</th>
					<th className="border-2 border-gray-300 capitalize">{col2}</th>
					<th className="border-2 border-gray-300 capitalize">{col3}</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(objectList).map(([key, value]) => {
					const obj = value as ColumnWilayah;
					return (
						<tr>
							<td className="border-2 border-gray-300 p-2 capitalize">
								{obj.title}
							</td>
							<td className="border-2 border-gray-300 p-2">{obj.number}</td>
							<td className="border-2 border-gray-300 p-2">{obj.satuan}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
