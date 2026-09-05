const phanTuLoiChao = document.getElementById("loiChao");
const gioHienTai = new Date().getHours();

if (gioHienTai < 12) {
    phanTuLoiChao.innerText = "Chào buổi sáng! 🌅";
} else if (gioHienTai < 18) {
    phanTuLoiChao.innerText = "Chào buổi chiều! ☕";
} else {
    phanTuLoiChao.innerText = "Chào buổi tối! 🌙";
}

const nutDoiMau = document.getElementById("nutDoiMau");
const nenCV = document.getElementById("nenCV");

const danhSachMau = ["#ffffff", "#f5f6fa", "#fdf5e6", "#e8f6f3", "#f9ebea"];
let chiSoMauHienTai = 0;

nutDoiMau.addEventListener("click", function() {
    chiSoMauHienTai = (chiSoMauHienTai + 1) % danhSachMau.length;
    
    nenCV.style.backgroundColor = danhSachMau[chiSoMauHienTai];
});