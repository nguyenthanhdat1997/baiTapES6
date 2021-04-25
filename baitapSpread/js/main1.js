let str = "HoverMe!";
let chars = [...str];

let jumpText = () =>{
    let content = "";
    for (const index of chars) {
        content += `
            <span>${index}</span>
        `
    }
    document.querySelector(".heading").innerHTML = content;

}
jumpText();