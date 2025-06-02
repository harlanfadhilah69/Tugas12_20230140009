function kirimData(event) {
    event.preventDefault();

    var name = document.getElementById("nama").value;
    var nomer = document.getElementById("nomer").value;
    var tanggal = document.getElementById("tanggal").value;
    var sepatu = document.querySelector("input[name=sepatu]:checked")?.value || "Belum dipilih";
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama : " + name +
        "\nNomer : " + nomer +
        "\nTanggal Pemesanan : " + tanggal +
        "\nSepatu : " + sepatu +
        "\nAlamat : " + alamat
    );

     document.querySelector("form").reset();
}
