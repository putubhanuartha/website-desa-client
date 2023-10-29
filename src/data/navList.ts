export type NavListType = {
	titleList: string;
	link: string;
	sublist: { list: string; link: string }[];
};
export const navList: NavListType[] = [
	{
		titleList: "Profil Desa",
		link: "",
		sublist: [
			{ list: "Wilayah Desa", link: "/profil-desa/wilayah" },
			{ list: "Peta Desa", link: "/profil-desa/peta" },
			{ list: "Sejarah Desa", link: "/profil-desa/sejarah" },
			{ list: "Visi Misi", link: "profil-desa/visi-misi" },
			{ list: "Perangkat Desa", link: "/profil-desa/perangkat-desa" },
		],
	},
	{
		titleList: "Lembaga Desa",
		link: "",
		sublist: [
			{ list: "BPD", link: "/lembaga/bpd" },
			{ list: "PKK", link: "/lembaga/pkk" },
			{ list: "BUMDes", link: "/lembaga/bumdes" },
		],
	},
	{
		titleList: "Statistik Desa",
		link: "/statistik",
		sublist: [
			{ list: "Data Jenis Kelamin", link: "/jenis-kelamin" },
			{ list: "Data Agama", link: "/agama" },
			{ list: "Data Pekerjaan", link: "/pekerjaan" },
		],
	},
];
