var daySo = []
function clearInput() {
document.getElementById("nhap-so-n").value =""
  
}
function themSo() {
    var soThemVao = document.getElementById("nhap-so-n").value *1
    daySo.push(soThemVao)
    console.log("🥶 - daySo:", daySo)
    clearInput()
}

// câu 1: Tổng số dương
function tinhTong() {
    var tongCacSoDuong = 0
    for (i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            tongCacSoDuong = tongCacSoDuong + daySo[i]
        }
    }
    var ketqua = document.getElementById("tong-so-duong")
    ketqua.innerHTML = `Tổng số dương: ${tongCacSoDuong}`
}
// Câu 2: Đếm số dương trong mảng
