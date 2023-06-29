import React, { useRef } from "react";
import { SectionTop } from "../../../components/SectionTop";
import { wilayahDesaList } from "../../../data/wilayahDesaList";
import { TableWilayah } from "./TableWilayah";
import { Link } from "react-router-dom";
import { useInView, AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
export const Wilayah = () => {
	const ref = useRef(null);
	const listRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const isListInView = useInView(listRef, { once: true });
	return (
		<SectionTop>
			<div className="mx-auto">
				<div className="lg:max-w-2xl max-w-none w-full  mx-auto">
					<h1 className="text-center text-3xl  font-medium mb-3">
						Wilayah Desa Sidorejo
					</h1>
					<img
						src="/img/wilayah/wilayah.jpg"
						alt="wilayah-img"
						className="mx-auto w-full object-cover mt-8"
					/>
					<p className="mt-4">
						Total luas wilayah desa bengkel sebesar{" "}
						{wilayahDesaList.tataGunaLahan.total.number}Ha dengan batas-batas
						wilayah yang telah ditetapkan berdasarkan{" "}
						{wilayahDesaList.perdaWilayah} sebagai berikut :
					</p>
					<div
						ref={ref}
						className="flex my-10 text-cyan-800 font-medium text-4xl xl:justify-between justify-evenly flex-col gap-y-5 xl:gap-y-0 md:flex-row items-center text-center"
					>
						<div>
							{isInView ? (
								<CountUp end={wilayahDesaList.tataGunaLahan.total.number} />
							) : null}
							<p>Hektar</p>
						</div>
						<div>
							{isInView ? <CountUp end={wilayahDesaList.jumlahDusun} /> : null}
							<p>Dusun</p>
						</div>
						<div>
							{isInView ? <CountUp end={wilayahDesaList.jumlahRw} /> : null}
							<p>RW</p>
						</div>
						<div>
							{isInView ? <CountUp end={wilayahDesaList.jumlahRt} /> : null}
							<p>RT</p>
						</div>
					</div>
					<div ref={listRef}>
						<AnimatePresence>
							{isListInView && (
								<div className="mt-4 flex flex-col gap-y-4">
									<motion.div
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1, ease: "easeInOut" }}
									>
										<p className="text-xl font-medium">1. Batas Wilayah Desa</p>
										<table className="table-fixed w-full border-2 border-gray-300">
											<thead className="border-2 border-gray-300 bg-gray-300">
												<tr>
													<th className="border-2 border-gray-300 capitalize">
														Arah Mata Angin
													</th>
													<th className="border-2 border-gray-300 capitalize">
														Batas Wilayah
													</th>
												</tr>
											</thead>
											<tbody>
												{Object.entries(wilayahDesaList.batasWilayah).map(
													([key, value]) => {
														return (
															<tr>
																<td className="border-2 capitalize border-gray-300 p-2">
																	{key}
																</td>
																<td className="border-2 capitalize border-gray-300 p-2">
																	{value}
																</td>
															</tr>
														);
													}
												)}
											</tbody>
										</table>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
									>
										<p className="text-xl font-medium">2. Tata Guna Lahan</p>
										<TableWilayah
											col1="Kategori Luas Lahan"
											col2="Luas"
											col3="Satuan"
											objectList={wilayahDesaList.tataGunaLahan}
										/>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
									>
										<p className="text-xl font-medium">3. Iklim</p>
										<TableWilayah
											col1="Keadaan Iklim"
											col2="Ukuran"
											col3="Satuan"
											objectList={wilayahDesaList.iklim}
										/>
									</motion.div>
									<motion.p
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
										className="mb-2"
									>
										{wilayahDesaList.deskripsiWilayah}
									</motion.p>
								</div>
							)}
						</AnimatePresence>
					</div>

					<Link
						to={"/profil-desa/peta"}
						className="underline underline-offset-4 bg-cyan-800 text-white px-2 py-1 rounded-md mt-3 block w-fit"
					>
						Peta Desa
					</Link>
				</div>
			</div>
		</SectionTop>
	);
};
