export enum JenisAPBD {
	Pelaksanaan = "Pelaksanaan",
	Pendapatan = "Pendapatan",
	Pembelanjaan = "Pembelanjaan",
}
export type Anggaran = {
	judulAnggaran: string;
	jumlahAnggaran: number;
	jumlahRealisasi: number;
};
export type APBDDesaType = {
	jenisAPBD: JenisAPBD;
	listAnggaran: Anggaran[];
	tahun: number;
};
export const APBDDesaList: APBDDesaType[] = [
	{
		jenisAPBD: JenisAPBD.Pelaksanaan,
		tahun: 2023,
		listAnggaran: [
			{
				judulAnggaran: "Pendapatan",
				jumlahAnggaran: 1701477000,
				jumlahRealisasi: 705244707,
			},
			{
				judulAnggaran: "Belanja",
				jumlahAnggaran: 1740185000,
				jumlahRealisasi: 508575779,
			},
			{
				judulAnggaran: "Pembiayaan",
				jumlahAnggaran: 281268398,
				jumlahRealisasi: 286268398,
			},
		],
	},
	{
		jenisAPBD: JenisAPBD.Pendapatan,
		tahun: 2023,
		listAnggaran: [
			{
				judulAnggaran: "Dana Desa",
				jumlahAnggaran: 806844000,
				jumlahRealisasi: 404479800,
			},
			{
				judulAnggaran: "Bagi Hasil Pajak Dan Retribusi",
				jumlahAnggaran: 126438000,
				jumlahRealisasi: 0,
			},
			{
				judulAnggaran: "Alokasi Dana Desa",
				jumlahAnggaran: 578195000,
				jumlahRealisasi: 240910000,
			},
			{
				judulAnggaran: "Bantuan Keuangan Provinsi",
				jumlahAnggaran: 70000000,
				jumlahRealisasi: 30000000,
			},
			{
				judulAnggaran: "Bantuan Keuangan Kabupaten/kota",
				jumlahAnggaran: 117000000,
				jumlahRealisasi: 28350000,
			},
			{
				judulAnggaran: "Bunga Bank",
				jumlahAnggaran: 3000000,
				jumlahRealisasi: 1504907,
			},
		],
	},
	{
		jenisAPBD: JenisAPBD.Pembelanjaan,
		tahun: 2023,
		listAnggaran: [
			{
				judulAnggaran: "Bidang Penyelenggaran Pemerintahan Desa",
				jumlahAnggaran: 859445000,
				jumlahRealisasi: 301433679,
			},
			{
				judulAnggaran: "Bidang Pelaksanaan Pembangunan Desa",
				jumlahAnggaran: 518209700,
				jumlahRealisasi: 162392100,
			},
			{
				judulAnggaran: "Bidang Pembinaan Kemasyarakatan",
				jumlahAnggaran: 58638000,
				jumlahRealisasi: 0,
			},
			{
				judulAnggaran: "Bidang Pemberdayaan Masyarakat",
				jumlahAnggaran: 216092300,
				jumlahRealisasi: 10250000,
			},
			{
				judulAnggaran:
					"Bidang Penanggulangan Bencana, Darurat Dan Mendesak Desa",
				jumlahAnggaran: 87800000,
				jumlahRealisasi: 34500000,
			},
		],
	},
];
