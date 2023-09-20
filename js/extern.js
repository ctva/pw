var fblink = document.getElementById("fblink");
if (fblink) {
    fblink.addEventListener("click", function () {
        var userConfirmed = confirm("Apakah Anda yakin ingin membuka tautan Facebook?");
        if (userConfirmed) {
            window.open("https://www.facebook.com/profile.php?id=100006324337995");
        } else {
            alert('Yaudah di sini aja yahh, gausah ke fb!');
        }
    });
}

var iglink = document.getElementById("iglink");
if (iglink) {
    iglink.addEventListener("click", function () {
        var userConfirmed = confirm("Apakah Anda yakin ingin membuka tautan Instagram?");
        if (userConfirmed) {
            window.open("https://www.instagram.com/fyajgdt");
        } else {
            alert('Yaudah di sini aja yahh, gausah ke ig!');
        }
    });
}

var ghlink = document.getElementById("ghlink");
if (ghlink) {
    ghlink.addEventListener("click", function () {
        var userConfirmed = confirm("Apakah Anda yakin ingin membuka tautan GitHub?");
        if (userConfirmed) {
            window.open("https://www.github.com/ctva");
        } else {
            alert('Yaudah di sini aja yahh, gausah ke gh!');
        }
    });
}