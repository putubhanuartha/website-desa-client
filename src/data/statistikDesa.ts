export type LabelType = {
    label: string
    data: number[],
    backgroundColor: string[],
    borderColor: string[],
    borderWidth: number
}
export type DataChartType = {
    labels: string[],
    datasets: LabelType[]
}

export const dataAgama: DataChartType = {
    labels: ["Hindu", "Islam", "Kristen", "Katolik", "Budha", "Konghucu", "Lainnya"],
    datasets: [
        {
            label: 'Jiwa',
            data: [12, 19, 3, 5, 2, 3, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 200, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 200, 64, 1)',
            ],
            borderWidth: 1,
        },
    ]
}
export const dataPekerjaan: DataChartType = {
    labels: ["Belum/Tidak Bekerja", "Wiraswasta", "Karyawan Swasta", "Pelajar/Mahasiswa", "Kepolisian", "Tentara Nasional Indonesia", "Petani", "Buruh Tani", "Mengurus Rumah Tangga", "Perdagangan"],
    datasets: [
        {
            label: 'Jiwa',
            data: [12, 19, 3, 5, 2, 3, 20, 40, 50, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 200, 64, 0.2)',
                'rgba(75, 192, 170, 0.2)',
                'rgba(240, 206, 86, 0.2)',
                'rgba(255, 109, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 200, 64, 1)',
                'rgba(75, 192, 170, 0.2)',
                'rgba(240, 206, 86, 0.2)',
                'rgba(255, 109, 132, 0.2)',
            ],
            borderWidth: 1,
        },
    ]
}
export const dataJenisKelamin: DataChartType = {
    labels: ["Laki - laki", "Perempuan"],
    datasets: [
        {
            label: 'Jiwa',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
    ]
}