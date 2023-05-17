function klik() {
    // console.log("Halo Bang");
    // var bisa dirubah
    // let tidak bisa diubah
    // const tidak bisa diubah
    // pakai id atau nama dari tabel nama nya
    var harga = document.getElementById("harga").value;
    var jumlah = document.getElementById("jumlah").value;
    var diskon = document.getElementById("diskon").value
    var hasil = harga * jumlah;
    var hasildiskon = hasil * (diskon /100);
    if(diskon <= 10){
        alert("diskonmu 10 persen");
    }
    else if(diskon <= 50){
        alert("diskonmu 50 persen");
    }
    else if(diskon <= 90){
        alert("diskonmu 90 persen");
    }
    else{
        alert("error coeg");
    }
    var hasiltotal = hasil - hasildiskon;
    document.getElementById("total").value = hasiltotal;
    
}