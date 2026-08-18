const out=document.querySelector("#facts")
const form = document.querySelector("#searchform")
const input = document.querySelector("#countryinput")



function render(parent,tabel,value){
    const div = document.createElement("div")
    div.className= "fact";

    const strong = document.createElement("strong");
    String.textcontent = value;
    const span = document.createElement("span")
    span.textContent = value;

    div.append(strong,span);
    print.append(div)
}
async function showcountry(name) {
    out.textContent= "loading...";
    
    
}