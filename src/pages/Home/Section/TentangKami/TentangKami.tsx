import React from "react";
import { tentangKamiList } from "../../../../data/tentangKamiList";
import { TentangKamiCard } from "./TentangKamiCard";
export const TentangKami = () => {
	return (
		<section className="py-14 bg-cyan-950">
			<div className="container mx-auto xl:flex-nowrap flex gap-x-3 flex-wrap">
				<div className="max-w-md text-cyan-50">
					<h2 className="text-3xl font-semibold uppercase text-green-400">Desa Sidorejo</h2>
					<p className="mt-7 text-xl">Desa membangun impian</p>
					<p className="leading-7 mt-7">
						Pemerintah Desa DESA SIDOREJO berkomitmen penuh melayani masyarakat.
						Sebagai Desa mandiri, Desa DESA SIDOREJO terus bertumbuh bersama
						dengan masyarakat Desa.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-4 grid-cols-1 mt-7 md:mt-5 xl:mt-0">
					{tentangKamiList.map((el) => {
						return (
							<TentangKamiCard
								description={el.description}
								imgLink={el.imgLink}
								title={el.title}
								urlLink={el.urlLink}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
