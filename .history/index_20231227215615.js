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
function demSoDuong() {
   var soSoDuong = 0
    for (i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            soSoDuong++
        }
    }
    var ketqua = document.getElementById("dem-so-duong")
    ketqua.innerHTML = `Số dương: ${soSoDuong}`
}
// Câu 3: Tìm số nhỏ nhất
function soNhoNhat() {
   var soNhoNhat = daySo[0]
    for (i = 0; i < daySo.length; i++) {
        if (soNhoNhat > daySo[i]) {
            soNhoNhat = daySo[i]
        }
    }
    var ketqua = document.getElementById("so-nho-nhat")
    ketqua.innerHTML = `Số nhỏ nhất: ${soNhoNhat}`
}
// Câu 4: Tìm số dương nhỏ nhất
function soDuongNhoNhat() {
    var soNhoNhat = daySo[0]
     for (i = 0; i < daySo.length; i++) {
         if (soNhoNhatsoNhoNhat > daySo[i]) {
             soNhoNhat = daySo[i]
         }
     }
     var ketqua = document.getElementById("so-nho-nhat")
     ketqua.innerHTML = `Số nhỏ nhất: ${soNhoNhat}`
 }