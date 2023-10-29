import React from "react";
import { APBD } from "../../pages/Home/Section/APBD/APBD";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import {
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineTwitter,
} from "react-icons/ai";
export const Footer = () => {
	return (
		<>
			<APBD />
			<footer className="py-7 bg-cyan-950 text-white">
				<div className="container mx-auto flex gap-x-5 md:flex-row gap-y-5 flex-col">
					<div className="max-w-md">
						<div className="flex items-center ">
							<img
								src={"/logo.png"}
								alt="logoKabupaten"
								className="w-14 object-cover"
							/>
							<h1 className="font-semibold md:text-2xl text-xl">
								Desa Sidorejo
							</h1>
						</div>
						<p className="px-3 md:text-base text-sm">
							Website Resmi Pemerintah Desa Sidorejo, Kecamatan Sukosewu,
							Kabupaten Bojonegoro
						</p>
						<div className="flex items-center px-3 mt-3 gap-x-3">
							<AiOutlineFacebook size={35} />
							<AiOutlineInstagram size={35} />
							<AiOutlineTwitter size={35} />
						</div>
					</div>
					<div className="max-w-md px-3">
						<div className="flex items-center gap-x-2">
							<i>
								<BsFillChatSquareDotsFill size={25} />
							</i>
							<p className="font-semibold md:text-2xl text-xl">Hubungi Kami</p>
						</div>
						<div className="mt-3 flex flex-col gap-y-2 ">
							<p className="md:text-base text-sm">
								Jln. Desa Sidorejo Sukosewu Bojonegoro Kecamatan Sukosewu
								Kabupaten Bojonegoro Provinsi Jawa Timur Kode Pos 62185
							</p>
							<p className="md:text-base text-sm">
								Email: email-sidorejosukosewu@gmail.com
							</p>
							<p className="md:text-base text-sm">Telp: 081383118762</p>
						</div>
					</div>
				</div>
			</footer>
			<div className="bg-slate-800 py-1.5 border-t-2 border-dotted">
				<p className="text-center text-lg text-white">
					Made with ❤️ by Putu Arya
				</p>
			</div>
		</>
	);
};
