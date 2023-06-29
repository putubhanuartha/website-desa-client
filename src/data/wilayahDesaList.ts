export type ColumnWilayah = {
	number: number;
	satuan: string;
	title: string;
};
type WilayahDesa = {
	jumlahDusun: number;
	jumlahRt: number;
	jumlahRw: number;
	perdaWilayah: string;
	batasWilayah: {
		utara: string;
		selatan: string;
		barat: string;
		timur: string;
	};
	tataGunaLahan: {
		luasSawah: ColumnWilayah;
		luasTanahKering: ColumnWilayah;
		luasTanahBasah: ColumnWilayah;
		luasTanahPerkebunan: ColumnWilayah;
		luasFasilitasUmum: ColumnWilayah;
		luasTanahHutan: ColumnWilayah;
		total: ColumnWilayah;
	};
	iklim: {
		curahHujan: ColumnWilayah;
		jumlahBulanHujan: ColumnWilayah;
		kelembaban: ColumnWilayah;
		suhuRataHarian: ColumnWilayah;
		tinggiPermukaanLaut: ColumnWilayah;
	};
	deskripsiWilayah: string;
};
export const wilayahDesaList: WilayahDesa = {
	jumlahDusun: 2,
	jumlahRt: 12,
	jumlahRw: 4,
	perdaWilayah: "Perdes nomor 07 tahun 1998 ",
	batasWilayah: {
		utara: "Desa Pejaten",
		timur: "Desa Belalang",
		barat: "Desa Sudimara",
		selatan: "Desa Pangkung Tibah",
	},
	tataGunaLahan: {
		luasSawah: { number: 225, satuan: "Ha", title: "Luas Sawah" },
		luasTanahKering: {
			number: 61.29,
			satuan: "Ha",
			title: "Luas Tanah Kering",
		},
		luasTanahBasah: { number: 0, satuan: "Ha", title: "Luas Tanah Basah" },
		luasTanahPerkebunan: {
			number: 0,
			satuan: "Ha",
			title: "Luas Tanah Perkebunan",
		},
		luasFasilitasUmum: {
			number: 4.71,
			satuan: "Ha",
			title: "Luas Fasilitas Umum",
		},
		luasTanahHutan: { number: 0, satuan: "Ha", title: "Luas Tanah Hutan" },
		total: { number: 291, satuan: "Ha", title: "Total" },
	},
	iklim: {
		curahHujan: { number: 1322, satuan: "mm", title: "Curah Hujan" },
		jumlahBulanHujan: {
			number: 5,
			satuan: "bulan",
			title: "Jumlah Bulan Hujan",
		},
		kelembaban: { number: 26, satuan: "gr/m2", title: "Kelembaban" },
		suhuRataHarian: {
			number: 31,
			satuan: "Derajat Celcius",
			title: "Suhu Rata - Rata Harian",
		},
		tinggiPermukaanLaut: {
			number: 45,
			satuan: "mdpl",
			title: "Tinggi Permukaan Laut",
		},
	},
	deskripsiWilayah:
		"Sebagian besar wilayah desa bengkel adalah dataran rendan dengan warna tanah hitam dengan tingkat kemiringan rata - rata 10 derajat dan memiliki tektur seperti pasir. Jarak tembuh ke Ibu Kita Kecamatan sejauh 8km dengan waktu tempuh kuran glebih 15 menit dengan kendaraan bermotor. Sedangkan jarak tempuh ke Ibu Kota Kabupaten sejauh 15 Km dengan waktu tempuh kurang lebih 30 menit dengan kendaraan bermotor. ",
};
