import React from "react";
import { Link } from "react-router-dom";
export const SistemInformasiDesa = () => {
	return (
		<section className="py-10 bg-cyan-900 text-white">
			<div className="mx-auto container">
				<div className="lg:flex-row flex-col flex justify-center  gap-y-8 md:gap-y-14 2xl:gap-y-0 items-center my-5 gap-x-10">
					<div className="relative">
						<img
							src="/img/sid/sid.png"
							alt="sid-img"
							className="w-64 absolute z-40 top-0 left-0"
						/>
						<svg
                            className="scale-150 w-64"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 500 500"
							width="100%"
							id="blobSvg"
							transform="rotate(0)"
							style={{ opacity: 1 }}
							filter="blur(0.8px)"
						>
							<defs>
								<linearGradient
									id="gradient"
									x1="0%"
									y1="0%"
									x2="0%"
									y2="100%"
								>
									<stop
										offset="0%"
										style={{ stopColor: "rgb(85, 132, 226)" }}
									></stop>
									<stop
										offset="100%"
										style={{ stopColor: "rgb(206, 204, 245)" }}
									></stop>
								</linearGradient>
							</defs>

							<path
								id="blob"
								fill="url(#gradient)"
								style={{ opacity: 1 }}
							>
								<animate
									attributeName="d"
									dur="10000ms"
									repeatCount="indefinite"
									values="M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M443.46373,322.92581Q424.06453,395.85162,352.29275,408.54192Q280.52096,421.23222,209.43547,432.55323Q138.34998,443.87423,108.93547,378.01696Q79.52096,312.15968,50.50966,239.62741Q21.49835,167.09515,80.22256,112.52096Q138.94677,57.94677,211.78709,57.03792Q284.62741,56.12906,342.97339,89.43146Q401.31936,122.73387,432.09114,186.36693Q462.86293,250,443.46373,322.92581Z;M428.39652,310.63781Q395.12039,371.27562,337.58607,396.3189Q280.05174,421.36219,204.00896,441.94775Q127.96619,462.5333,107.32787,385.81839Q86.68955,309.10348,96.33581,253.18955Q105.98207,197.27562,134.68904,148.26665Q163.396,99.25769,224.43929,74.05174Q285.48258,48.8458,334.83632,93.40548Q384.19006,137.96516,422.93135,193.98258Q461.67264,250,428.39652,310.63781Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z"
								></animate>
							</path>
						</svg>
					</div>
					<div className="max-w-3xl flex flex-col gap-y-4 text-sm">
						<h5 className="text-xl font-medium">SISTEM INFORMASI MASYARAKAT</h5>
						<p>
							Dalam upaya memberikan pelayanan terbaik kepada masyarakat,
							Pemerintah Desa Bengkel menyiapkan berbagai saluran komunikasi
							agar dapat menampung aspirasi masyarakat dengan sebaik-baiknya,
							sehinga dapat tercipta iklim partisipatif warga untuk ikut
							membangun Desa.
						</p>
						<p>
							Salah satunya adalah Sistem Informasi Pengaduan Masyarakat atau
							disingkat SIDUMAS. Informasikan kepada kami setiap keluhan maupun
							masukan Anda dengan mengisi formulir pengaduan berikut ini.
						</p>
						<Link
							target="_blank"
							rel="noopener"
							className="bg-cyan-950 px-4 hover:bg-slate-200 hover:text-black transition-colors duration-200 py-2 w-fit rounded-lg"
							to={"https://sidorejo-bjn.desa.id/"}
						>
							Kunjungi SID Kami
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
