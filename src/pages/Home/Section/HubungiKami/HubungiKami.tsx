import React, { FormEventHandler, useRef } from "react";
import "./HubungiKami.css";
import { useInView, AnimatePresence, motion } from "framer-motion";
export const HubungiKami = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = "putuaryabhanu03@gmail.com";
		const subject = formData.get("subject");
		const name = formData.get("name");
		const message = `Kepada Desa Sidorejo\n\n${formData.get(
			"message"
		)}\n\nSalam Hormat,\n${name}`;
		const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
			subject as string
		)}&body=${encodeURIComponent(message as string)}`;
		window.location.href = mailtoLink;
	}
	return (
		<section
			ref={ref}
			id="hubungi_kami"
			className="py-10 text-white bg-cyan-800"
		>
			<div className="mx-auto container ">
				<h2 className="text-section-1 font-semibold text-center">
					Hubungi Kami
				</h2>
				<form
					onSubmit={handleSubmitForm}
					className="max-w-3xl mx-auto flex flex-col gap-y-3 "
				>
					<AnimatePresence>
						{isInView && (
							<div>
								<motion.div
									className="form_container"
									initial={{ x: -30, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8 }}
								>
									<label htmlFor="name">Nama</label>
									<input
										name="name"
										id="name"
										type="text"
										placeholder="Masukkan nama anda"
										required
									/>
								</motion.div>
								<motion.div
									className="form_container"
									initial={{ x: 30, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									<label htmlFor="subject">Subjek</label>
									<input
										name="subject"
										id="subject"
										type="text"
										placeholder="Masukkan subjek"
										required
									/>
								</motion.div>
								<motion.div
									className="form_container"
									initial={{ x: -30, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.8 }}
								>
									<label htmlFor="message">Pesan</label>
									<textarea
										name="message"
										id="message"
										cols={30}
										rows={10}
										required
									></textarea>
								</motion.div>
								<motion.button
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 1.2 }}
									type="submit"
									className="bg-cyan-900 mt-2 transition-colors duration-100 rounded-lg hover:bg-cyan-950 py-2 w-full"
								>
									Kirim Email
								</motion.button>
							</div>
						)}
					</AnimatePresence>
				</form>
			</div>
		</section>
	);
};
