var daySo = []
function themSo() {
    var soThemVao = document.getElementById("nhap-so-n").value *1
    daySo.push(soThemVao)
    console.log("🥶 - daySo:", daySo)
}

// câu 1: Tổng số dương
function tinhTong() {
    var tongCacSoDuong = 0
    for (i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            tongCacSoDuong = tongCacSoDuong + daySo[i]
        }
    }
    var tongSoDuong = document.getElementById("tong-so-duong")
    tongSoDuong.innerHTML = `Tổng số dương: ${tongCacSoDuong}`
}