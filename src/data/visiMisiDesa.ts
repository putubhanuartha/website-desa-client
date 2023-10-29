type Misi = {
    capaian: string
    listCapaian: string[]
}
const visiMisiDesa = {
    visi: `Menuju Desa Sidorejo yang Sejahtera dan Mandiri Berlandaskan Budaya
    dan Kreativitas`,
    misiDesa: [
        {
            capaian: "Membangun tata kelola pemerintahan desa yang baik, transparan dan akuntabel", listCapaian: [
                "Perencanaan pembangunan yang partisipatif dan berbasis data ", "Membangun sistem informasi dan transparansi anggaran Desa", "	Penataan birokrasi dan penyederhanaan sistem administrasi pelayanan bagi masyarakat", `	Harmonisasi dan kerjasama antarkelembagaan (subak, banjar adat/ desa adat, dll) dalam pengelolaan potensi desa`
            ]
        },
        {
            capaian: "Pemberdayaan masyarakat yang kreatif dan inovatif berbasiskan budaya.",
            listCapaian: ["Pengembangan ekowisata desa yang mendukung aktivitas pertanian dan budaya setempat", `	Membangun "ruang belajar" untuk masyarakat desa`, `	Pengembangan kapasitas, pelayanan pendidikan dan kebudayaan`]
        }
        , {
            capaian: "Peningkatan rata-rata pertumbuhan ekonomi desa sesuai dengan target capaian nasional",
            listCapaian: ["Pengembangan infrastruktur yang menunjang aktivitas ekonomi dan kesejahteraan masyarakat", "	Mendorong pertumbuhan industri kreatif, UMKM/ startup", "	Optimalisasi peran Bumdes dalam penguatan produk lokal (dari sisi produksi dan marketing)", "	Peningkatan sumber pendapatan desa "]
        }
    ] as Misi[]
}

export default visiMisiDesa