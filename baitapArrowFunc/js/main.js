const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const loadColor = () => {
    let colELE = document.querySelector("#colorContainer");
    let content = "";
    for (let index in colorList) {
        content += `
        <button class="color-button ${colorList[index]}"></button>
    `
    }
    colELE.innerHTML = content;
}
loadColor();


let colorPicker = document.getElementsByClassName("color-button");
let house = document.getElementById("house");

//Vòng lặp lấy tất cả màu đã được load lên trang web
for (let i = 0; i < colorPicker.length; i++) {
    //sk dựa vào i vị trí click
    colorPicker[i].addEventListener("click", () => {
        //add màu vô classname
        house.className = "house " + colorList[i];
    })
}
