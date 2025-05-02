function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }

function confirm(){
    var nama = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (nama == "" || email == "" || message == "") {
        alert("Semua kolom harus diisi!");
        return false;
    }
    else {
        alert("Terima kasih " + nama + ", pesan Anda telah terkirim!");
        return true;
    }
}