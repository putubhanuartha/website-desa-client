import React, { useRef } from "react";
import visiMisiImage from "/img/visi-misi/visi-misi.jpg";
import visiMisiDesa from "../../../data/visiMisiDesa";
import { motion, useInView } from "framer-motion";
const VisiMisi = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
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
						<p className="font-semibold text-center  md:text-xl text-lg">
							Visi:{" "}
						</p>
						<p className="font-medium text-center md:text-base text-sm">
							{visiMisiDesa.visi}
						</p>
					</div>
					<div ref={ref}>
						<p className="font-semibold md:text-xl text-lg  text-center">
							Misi:{" "}
						</p>
						{isInView && (
							<div className="flex flex-col gap-y-8">
								{visiMisiDesa.misiDesa.map((el, index) => {
									return (
										<motion.table
											initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												ease: "easeInOut",
												duration: 0.7,
												delay: index * 0.6,
											}}
											key={index}
											className="table-auto w-full"
										>
											<thead className="bg-slate-200">
												<tr>
													<th className="py-1.5  md:text-base text-sm">
														{el.capaian}
													</th>
												</tr>
											</thead>
											<tbody>
												{el.listCapaian.map((el, index) => {
													return (
														<tr
															key={index}
															className="bg-slate-100"
														>
															<td className="text-center py-1.5  md:text-base text-sm px-3">
																{el}
															</td>
														</tr>
													);
												})}
											</tbody>
										</motion.table>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VisiMisi;
