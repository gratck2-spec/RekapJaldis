document.addEventListener('DOMContentLoaded', function() {
    const jenisKendaraanSelect = document.getElementById('jenis_kendaraan');
    const kendaraanUmumDetails = document.getElementById('kendaraan_umum_details');
    const nomorTiketInput = document.getElementById('nomor_tiket');
    const nomorKursiInput = document.getElementById('nomor_kursi');

    function toggleKendaraanUmumDetails() {
        const selectedValue = jenisKendaraanSelect.value;
        if (selectedValue === 'pesawat' || selectedValue === 'kereta' || selectedValue === 'bus_travel' || selectedValue === 'kapal_laut') {
            kendaraanUmumDetails.style.display = 'block';
            if (selectedValue === 'bus_travel') {
                nomorKursiInput.style.display = 'none';
                document.querySelector('label[for="nomor_kursi"]').style.display = 'none';
            } else {
                nomorKursiInput.style.display = 'block';
                document.querySelector('label[for="nomor_kursi"]').style.display = 'block';
            }
        } else {
            kendaraanUmumDetails.style.display = 'none';
        }
    }

    jenisKendaraanSelect.addEventListener('change', toggleKendaraanUmumDetails);

    // Initial check on page load
    toggleKendaraanUmumDetails();
});
