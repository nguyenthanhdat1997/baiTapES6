//Hàm tính điểm tb
const tinhDTB = ((...diem) => {
    let dtb = 0;
    return diem.map(diem => {
        dtb += +diem;

    }), dtb = (dtb / diem.length);
});
document.getElementById("btnKhoi1").onclick = (() => {
    let toan = document.getElementById("inpToan").value;
    let ly = document.getElementById("inpLy").value;
    let hoa = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa)
}),
    document.getElementById("btnKhoi2").onclick = (() => {
        let van = document.getElementById("inpVan").value;
        let su = document.getElementById("inpSu").value;
        let dia = document.getElementById("inpDia").value;
        let eng = document.getElementById("inpEnglish").value;
        document.getElementById("tbKhoi2").innerHTML = tinhDTB(van, su, dia, eng)
    })