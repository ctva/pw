var webName = "JGDTPLYGRND.";
var whoName = prompt("Masukkan Nama Anda?", "");

if ((whoName.toLowerCase() === "jgdt" || whoName.toLowerCase() === "rsp")) {
    alert("Halo admin selamat datang di " + webName);
} else {
    alert("Halo " + whoName + " selamat datang di " + webName);
}