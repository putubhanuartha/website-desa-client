import { useInView } from "framer-motion";
import { useRef } from "react";
import { ListCardAPBD } from "./ListCardAPBD";
import { APBDDesaList } from "../../../../data/APBDdesaList";
export const APBD = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<section
			ref={ref}
			className="py-10"
		>
			<div className="container mx-auto">
				<h2 className="text-center  text-section-1 font-semibold">APBD Desa</h2>
				<div className="grid my-5 xl:grid-cols-3 gap-y-7 xl:gap-y-0 sm:grid-cols-2 grid-cols-1 gap-x-5">
					{APBDDesaList.map((el) => {
						return (
							<ListCardAPBD
								jenisAPBD={el.jenisAPBD}
								tahun={el.tahun}
								listAnggaran={el.listAnggaran}
								isInView={isInView}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
