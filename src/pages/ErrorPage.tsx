import React from "react";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
	return (
		<section className="min-h-screen flex">
			<div className="max-w-2xl m-auto shadow-[0px_0px_8px_2px_rgba(0,0,0,0.2)] rounded-xl px-5 py-6">
				<p className="text-red-700 text-3xl font-semibold">404 Not Found</p>
				<p className="text-xl">Maaf, halaman yang anda akses tidak tersedia</p>
				<Link className="underline" to={"/"}>Kembali ke halaman utama</Link>
			</div>
		</section>
	);
};
