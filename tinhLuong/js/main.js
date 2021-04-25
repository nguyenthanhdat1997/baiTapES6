let tinhTongLuong = (luongCB,heSoLuong)=>{
    let tongLuong = +luongCB * +heSoLuong;
    return tongLuong;
}
document.getElementById("btnKhoi1").onclick = (() => {
    let hsLuong = document.querySelector("#heSoLuong").value;
    let luongCB = document.querySelector("#luongCB").value;
    

    let nhanVien = {};
    let arrTd = [];
    let arrInput = document.querySelectorAll(".form input,.form select");
    for (let i = 0; i < arrInput.length; i++) {
        let tagInput = arrInput[i];
        let {id,value,title} = tagInput;
        nhanVien = {...nhanVien,[id]:value}
        //Tạo thead cho tr
        arrTd = [...arrTd,title];
    }

    //tạo cột
    let contentTr = `<tr>`;
    //length - 2 là trừ 2 cột cuối k muốn hiện ra
    for (let i = 0; i < arrTd.length-2; i++) {
        contentTr += `
            <td>${arrTd[i]}</td>
            
        `
    }
    contentTr += '<td>Tổng lương</td>';
    contentTr += '</tr>';
    document.querySelector("thead").innerHTML = contentTr;
    
    //Duyệt đối tượng nhân viên
    let contentTrBody = "<tr>";
        contentTrBody += `
            <td>${nhanVien.maNV}</td>
            <td>${nhanVien.tenNV}</td>
            <td>${nhanVien.chucVu}</td>
        `
    
    contentTrBody += `<td>${tinhTongLuong(luongCB,hsLuong)}</td>`
    contentTrBody += '</tr>';

    document.querySelector('tbody').innerHTML = contentTrBody;
    
})