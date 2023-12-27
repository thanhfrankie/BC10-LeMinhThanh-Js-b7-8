var daySo = [];
function clearInput() {
  document.getElementById("nhap-so-n").value = "";
}
function themSo() {
  var soThemVao = document.getElementById("nhap-so-n").value * 1;
  daySo.push(soThemVao);
  console.log("🥶 - daySo:", daySo);
  clearInput();
}

// câu 1: Tổng số dương
function tinhTong() {
  var tongCacSoDuong = 0;
  for (var i = 0; i < daySo.length; i++) {
    if (daySo[i] > 0) {
      tongCacSoDuong = tongCacSoDuong + daySo[i];
    }
  }
  var ketqua = document.getElementById("tong-so-duong");
  ketqua.innerHTML = `Tổng số dương: ${tongCacSoDuong}`;
}
// Câu 2: Đếm số dương trong mảng
function demSoDuong() {
  var soSoDuong = 0;
  for (var i = 0; i < daySo.length; i++) {
    if (daySo[i] > 0) {
      soSoDuong++;
    }
  }
  var ketqua = document.getElementById("dem-so-duong");
  ketqua.innerHTML = `Số dương: ${soSoDuong}`;
}
// Câu 3: Tìm số nhỏ nhất
function soNhoNhat() {
  var soNhoNhat = daySo[0];
  for (var i = 0; i < daySo.length; i++) {
    if (soNhoNhat > daySo[i]) {
      soNhoNhat = daySo[i];
    }
  }
  var ketqua = document.getElementById("so-nho-nhat");
  ketqua.innerHTML = `Số nhỏ nhất: ${soNhoNhat}`;
}
// Câu 4: Tìm số dương nhỏ nhất
function soDuongNhoNhat() {
  var daySoDuong = [];
  var soDuongNhoNhat = daySoDuong[0];

  for (var i = 0; i < daySo.length; i++) {
    if (daySo[i] > 0) {
      daySoDuong.push(daySo[i]);
    }
  }
  var soDuongNhoNhat = daySoDuong[0];
  for (var j = 0; j < daySoDuong.length; j++) {
    if (soDuongNhoNhat > daySoDuong[j]) {
      soDuongNhoNhat = daySoDuong[j];
    }
  }
  var ketqua = document.getElementById("so-duong-nho-nhat");

  if (daySoDuong !== null) {
    ketqua.innerHTML = `Không có số dương nào trong mảng`;
  } else {
    ketqua.innerHTML = `Số dương nhỏ nhất: ${soDuongNhoNhat}`;
  }
}
// Câu 5: Tìm số chẵn cuối cùng
function soChanCuoiCung() {
  var soChanCuoiCung = 0;
  for (var i = 0; i < daySo.length; i++) {
    if (daySo[i] % 2 == 0) {
      soChanCuoiCung = daySo[i];
    }
  }
  var ketqua = document.getElementById("so-chan-cuoi-cung");
  ketqua.innerHTML = `Tổng số dương: ${soChanCuoiCung}`;
}
// Câu 6: Đổi chỗ
function doiCho() {
  var viTriSo1 = document.getElementById("so-vi-tri-1").value * 1;
  var viTriSo2 = document.getElementById("so-vi-tri-2").value * 1;
  var bienTam = 0;
  bienTam = daySo[viTriSo2];
  daySo[viTriSo2] = daySo[viTriSo1];
  daySo[viTriSo1] = bienTam;

  var ketqua = document.getElementById("ket-qua-doi-cho");
  ketqua.innerHTML = `Mảng sau khi đổi: ${daySo}`;
}

// Câu 7: Sắp xếp tăng dần
function sapXepTangDan() {
  daySo.sort();

  var ketqua = document.getElementById("sap-xep-tang-dan");
  ketqua.innerHTML = `Mảng sau khi đổi: ${daySo}`;
}
// Câu 8: Tìm số nguyên tố đầu tiên
function laSoNguyenTo(num) {
  if (num <= 1) {
    return false;
  }

  // Lặp từ 2 đến căn bậc hai của num để kiểm tra số nguyên tố
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Nếu chia hết cho i, không phải số nguyên tố
    }
  }

  return true; // Nếu không chia hết cho bất kỳ số nào, là số nguyên tố
}

function soNguyenToDauTien() {
    var soNguyenToDauTien =  null;
  var ketqua = document.getElementById("so-nguyen-to-dau-tien");
    
  for (var i = 0; i < daySo.length; i++) {
    if (laSoNguyenTo(daySo[i])) {
        soNguyenToDauTien =daySo[i] ;
      break;
      }
    }


    if(laSoNguyenTo(soNguyenToDauTien) !== null) {
        ketqua.innerHTML = `Số nguyên tố đầu tiên: ${soNguyenToDauTien}`;
    } else {
        
        ketqua.innerHTML = `Không có số nguyên tố nào`;
    }
  
}
// Câu 9: Đếm số nguyên
function demSoNguyen() {
    var mangSoNguyen = []
    for (var i = 0; i < daySo.length; i++) {
        if (Number.isInteger(daySo[i])) {
            mangSoNguyen.push(daySo[i])
        }
    }


    var ketqua = document.getElementById("so-nguyen");
    ketqua.innerHTML = `Số số nguyên: ${mangSoNguyen.length}`;
}