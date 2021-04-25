//Hàm tính điểm tb
const tinhDTB = ((...diem) => {
    let dtb = 0;
    return diem.map(diem => {
        dtb += +diem;

    }), dtb = (dtb / diem.length);
});
document.getElementById("btnKhoi1").onclick = (() => {
    // let hoTen = document.getElementById("inpTen").value;
    let toan = document.getElementById("diemToan").value;
    let ly = document.getElementById("diemLy").value;
    let hoa = document.getElementById("diemHoa").value;

    let hocVien = {};
    let arrTd = [];
    let arrInput = document.querySelectorAll(".form input");
    for (let i = 0; i < arrInput.length; i++) {
        let tagInput = arrInput[i];
        let {id,value,title} = tagInput;
        //clone ra cái object
        //[]: object Literal khai báo thuộc tính 1 cách linh động
        hocVien = {...hocVien,[id]:value}
        //Tạo thead cho tr
        arrTd = [...arrTd,title];
    }

    //tạo cột
    let contentTr = `<tr>`;
    for (let i = 0; i < arrTd.length; i++) {
        contentTr += `
            <td>${arrTd[i]}</td>
            
        `
    }
    contentTr += '<td>Điểm trung bình</td>'
    contentTr += '</tr>';
    document.querySelector("thead").innerHTML = contentTr;
    
    //Duyệt đối tượng học viên
    let contentTrBody = "<tr>";
    for (let thuocTinh in hocVien) {
        contentTrBody += `
            <td>${hocVien[thuocTinh]}</td>
        `
        
        hocVien[thuocTinh];
    }
    
    contentTrBody += `<td>${tinhDTB(toan,ly,hoa)}</td>`
    contentTrBody += '</tr>';

    document.querySelector('tbody').innerHTML = contentTrBody;
    
})