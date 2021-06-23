var getEl = function(selector) {
    return document.querySelector(selector);
}

var arr = [];
var arrLength = 0

// Hàm thêm số vào mảng
var themSo = function() {
    var txtNumBer = getEl('#txtNumBer').value;
    if (isNaN(txtNumBer)) {
        alert('Yêu cầu nhập số nguyên');
        return;
    } else if (txtNumBer != parseFloat(txtNumBer)) {
        alert('Yêu cầu nhập số nguyên');
        return;
    } else {

        arr.push(parseFloat(txtNumBer));
        arrLength = arr.length;
    }
    getEl('#xuatThongTin').style.display = 'block';
    getEl('#xuatThongTin').innerHTML = arr;
    // console.log(arrLength)
}


// Tổng các số dương
var tongSoDuong = function() {
    var total = 0;
    for (i = 0; i < arrLength; i++) {
        if (arr[i] > 0) {
            total = total + arr[i];
        }
    }
    getEl('#xuatTongSoDuong').style.display = 'block';
    getEl('#xuatTongSoDuong').innerHTML = 'Tổng các số dương bằng: ' + total;
}

// Đếm số dương
var demSoDuong = function() {
    var dem = 0;
    for (i = 0; i < arrLength; i++) {
        if (arr[i] >= 0) {
            dem++;
        }
    }
    getEl('#demSoDuong').style.display = 'block';
    getEl('#demSoDuong').innerHTML = 'Có: ' + dem + ' số dương trong mảng';
    return dem;
}

//Tìm số nhỏ nhất trong mảng
var soNhoNhat = function() {
    var min = arr[0];
    for (i = 1; i < arrLength; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    getEl('#soNhoNhat').style.display = 'block';
    getEl('#soNhoNhat').innerHTML = 'Số nhỏ nhất trong mảng: ' + min;
}

// Số dương nhỏ nhất trong mảng
var soDuongNhoNhat = function() {
    var minDuong = arr[0];
    for (i = 1; i < arrLength; i++) {
        if (minDuong < 0) {
            minDuong = arr[i];
        }
        if (minDuong >= 0 && arr[i] >= 0 && minDuong > arr[i]) {
            minDuong = arr[i]
        }
    }
    getEl('#soDuongNhoNhat').style.display = 'block';
    getEl('#soDuongNhoNhat').innerHTML = 'Số dương nhỏ nhất trong mảng: ' + minDuong;
}

// Số chẵn cuối cùng trong mảng
var soChanCuoiCung = function() {
    var soChan;
    for (i = 0; i < arrLength; i++) {
        if (arr[i] % 2 == 0) {
            soChan = arr[i];
        } else {
            soChan = -1;
        }
    }
    getEl('#soChanCuoiCung').style.display = 'block';
    getEl('#soChanCuoiCung').innerHTML = 'Số chẵn cuối cùng trong mảng là: ' + soChan;
}

//Sắp xếp mảng tăng dần
var sapXep = function() {
    // var sort;
    // for (i = 0; i < arrLength; i++) {
    //     sort = i;
    //     for (var j = i + 1; j < arrLength; j++) {
    //         if (arr[sort] > arr[j]) {
    //             sort = j;
    //         }
    //     }
    //     if (i !== sort) {
    //         var temp = arr[i];
    //         arr[i] = arr[sort];
    //         arr[sort] = temp;
    //     }
    // }
    for (i = 0; i < arrLength; i++) {
        for (var j = i + 1; j < arrLength; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    getEl('#sapXep').style.display = 'block';
    getEl('#sapXep').innerHTML = 'Mảng sắp xếp: ' + arr;
}

// Tìm số nguyên tố đầu tiên của mảng. Nếu không có trả về -1
var soNguyenTo = function() {

}


// Nhập thêm 1 mảng số thực  tìm xem trong mảng có bao nhiêu số nguyên
var timSoNguyen = function() {
    var demSoNguyen = 0;
    for (var i = 0; i < arrLength; i++) {
        if (arr[i] == parseInt(arr[i])) {
            demSoNguyen++;
        }
    }
    getEl('#demSoNguyen').style.display = 'block';
    getEl('#demSoNguyen').innerHTML = 'Số lượng số nguyên trong mảng: ' + demSoNguyen;
}


// Đếm số âm trong mảng
var demSoLuongSoAm = function() {
    var demSoAm = 0;
    for (var i = 0; i < arrLength; i++) {
        if (arr[i] < 0) {
            demSoAm++;
        }
    }
    return demSoAm;
}

// Đếm số dương trong mảng
var demSoLuongSoDuong = function() {
    var demSoDuong = 0;
    for (i = 0; i < arrLength; i++) {
        if (arr[i] >= 0) {
            demSoDuong++;
        }
    }
    return demSoDuong;
}

// So Sánh số lượng số âm và số lượng số dương trong mảng
var soSanhAmDuong = function() {
    var soLuongDuong = demSoLuongSoDuong();
    var soLuongAm = demSoLuongSoAm();
    if (soLuongDuong > soLuongAm) {
        getEl('#soSanh').style.display = 'block';
        getEl('#soSanh').innerHTML = 'Số lượng số dương nhiều hơn số lượng số âm';
    } else if (soLuongDuong < soLuongAm) {
        getEl('#soSanh').style.display = 'block';
        getEl('#soSanh').innerHTML = 'Số lượng số âm nhiều hơn số lượng số dương';
    } else if (soLuongDuong = soLuongAm) {
        getEl('#soSanh').style.display = 'block';
        getEl('#soSanh').innerHTML = 'Số lượng số dương bằng số lượng số âm';
    }
}

// Kiểm tra số nguyên tố:
var kiemTraSNT = function(n) {
    var SNT = true;
    if (n < 2) {
        SNT = false;
    } else
    if (n > 2) {
        if (n % 2 == 0) {
            SNT = false;
        }
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                SNT = false;
                break;
            }
        }

    }
    return SNT;
}

// Tìm số nguyên tố đầu tiên trong mảng
// var demSoNguyen = document.getElementById('soNguyenTo');
var timSNT = function() {
    for (var i = 0; i < arrLength; i++) {
        if (kiemTraSNT(arr[i]) == true) {
            // alert('Số nguyên tố đầu tiên của mảng là: ' + arr[i]);
            document.getElementById('soNguyenTo').style.display = 'block';
            document.getElementById('soNguyenTo').innerHTML = 'Số nguyên tố đầu tiên của mảng là: ' + arr[i];
            return;
        }
    }
    // alert('Số nguyên tố đầu tiên của mảng là: ' + -1);
    document.getElementById('soNguyenTo').style.display = 'block';
    document.getElementById('soNguyenTo').innerHTML = 'Số nguyên tố đầu tiên của mảng là: ' + -1;

}

// Đổi chỗ cị trí trong mảng
var doiViTri = function() {
    var a = arr[getEl('#txtViTri1').value];
    var b = arr[getEl('#txtViTri2').value];
    if (a != b) {
        var temp = b;
        b = a;
        a = temp;
    }
    getEl('#xuatDoiViTri').style.display = 'block';
    getEl('#xuatDoiViTri').innerHTML = 'Giá trị vị trí sau khi đổi chỗ là: ' + a + '-' + b;
}

// Bắt sự kiện cho button
getEl('#btnThemSo').addEventListener('click', themSo);
getEl('#btnTongSoDuong').addEventListener('click', tongSoDuong);
getEl('#btnDemSoDuong').addEventListener('click', demSoDuong);
getEl('#btnSoNhoNhat').addEventListener('click', soNhoNhat);
getEl('#btnSoDuongNhoNhat').addEventListener('click', soDuongNhoNhat);
getEl('#btnSochanCuoiCung').addEventListener('click', soChanCuoiCung);
getEl('#btnSapXep').addEventListener('click', sapXep);
getEl('#btnSoSanh').addEventListener('click', soSanhAmDuong);
getEl('#btnDemSoNguyen').addEventListener('click', timSoNguyen);
getEl('#btnTimSoNguyenTo').addEventListener('click', timSNT);
getEl('#btnDoiViTri').addEventListener('click', doiViTri);