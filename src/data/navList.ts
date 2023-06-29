export type NavListType = {
	titleList: string;
	link: string;
	sublist: { list: string; link: string }[];
};
export const navList: NavListType[] = [
	{
		titleList: "Profil Desa",
		link: "/profil-desa",
		sublist: [
			{ list: "Wilayah Desa", link: "/wilayah" },
			{ list: "Peta Desa", link: "/peta" },
			{ list: "Sejarah Desa", link: "/sejarah" },
			{ list: "Visi Misi", link: "/visi-misi" },
			{ list: "Perangkat Desa", link: "/perangkat-desa" },
		],
	},
	{
		titleList: "Lembaga Desa",
		link: "/lembaga",
		sublist: [
			{ list: "BPD", link: "/bpd" },
			{ list: "PKK", link: "/pkk" },
			{ list: "BUMDes", link: "/bumdes" },
		],
	},
	{
		titleList: "Statistik Desa",
		link: "/statistik",
		sublist: [
			{ list: "Data Jenis Kelamin", link: "/jenis-kelamin" },
			{ list: "Data Kelompok Umur", link: "/kelompok-umur" },
			{ list: "Data Agama", link: "/agama" },
			{ list: "Data Pekerjaan", link: "/pekerjaan" },
			{ list: "APBD Desa", link: "/apbd-desa" },
		],
	},
];
