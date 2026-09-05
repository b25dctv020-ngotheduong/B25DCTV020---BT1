const manHinh = document.getElementById("manHinh");
const cacNut = document.querySelectorAll(".nut");

for (let i = 0; i < cacNut.length; i++) {
    cacNut[i].addEventListener("click", function(suKien) {
        
        const giaTriNut = suKien.target.innerText;
        const noiDungHienTai = manHinh.innerText;

        if (giaTriNut === "Clear") {
            manHinh.innerText = "0";
        } 
        else if (giaTriNut === "=") {
            try {
                manHinh.innerText = eval(noiDungHienTai);
            } catch (loi) {
                manHinh.innerText = "Lỗi";
            }
        } 
        else {
            if (noiDungHienTai === "0" || noiDungHienTai === "Lỗi") {
                manHinh.innerText = giaTriNut;
            } else {
                manHinh.innerText = noiDungHienTai + giaTriNut;
            }
        }
    });
}