import React from "react";
import visiMisiImage from "/img/visi-misi/visi-misi.jpg";
const VisiMisi = () => {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto py-24 flex flex-col items-center gap-y-6">
				<h1 className="text-center md:text-3xl text-2xl  mt-6 font-medium">
					Visi Misi Desa Sidorejo
				</h1>
				<img
					src={visiMisiImage}
					alt="visi misi image"
					className="lg:max-w-2xl md:max-w-lg md:w-full sm:w-[40rem] w-[20rem] object-cover"
				/>
				<div className="mt-3 flex flex-col gap-y-5">
					<p className="text-center">Oleh: Pemdes Sidorejo</p>
					<div>
						<p className="font-semibold text-center  md:text-xl text-lg">Visi: </p>
						<p className="font-medium text-center md:text-base text-sm">
							Menuju Desa Bengkel yang Sejahtera dan Mandiri Berlandaskan Budaya
							dan Kreativitas
						</p>
					</div>
					<div>
						<p className="font-semibold md:text-xl text-lg  text-center">Misi: </p>
						<div className="flex flex-col gap-y-8">
							<table className="table-auto w-full">
								<thead className="bg-slate-200">
									<tr>
										<th className="py-1.5  md:text-base text-sm">Song</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-slate-100">
										<td className="text-center py-1.5  md:text-base text-sm">
											The Sliding Mr. Bones (Next Stop, Pottersville)
										</td>
									</tr>
								</tbody>
							</table>
							<table className="table-auto w-full">
								<thead className="bg-slate-200">
									<tr>
										<th className="py-1.5  md:text-base text-sm">Song</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-slate-100">
										<td className="text-center py-1.5  md:text-base text-sm">
											The Sliding Mr. Bones (Next Stop, Pottersville)
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VisiMisi;
