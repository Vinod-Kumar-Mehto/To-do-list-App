const input = document.querySelector("[type=text]");
const btn = document.querySelector("[type=button]");
const element = document.querySelector(".element");
const target  = document.querySelector("span");
const list = document.querySelector(".list");

let arr = JSON.parse(localStorage.getItem("values")) || [];

function getValue(){
    const values = input.value;
    if(values == "") return;
     arr.push(values)
     display(arr)
     localStorage.setItem("values", JSON.stringify(arr))
     input.value = "";
     input.focus();
     

};
function display(array = []){

    element.innerHTML = array.map((current, index) => {
                return  `<p id = ${index}>${current}<span>&#10008;</span> </p>`;
        }).join("");
}


function romover(e){
        if(!e.target.matches("span")) return;
    let ide = `${e.target.parentNode.id}`;
    const idSel = document.getElementById(`${ide}`);
        idSel.remove();
        arr.forEach((current) => {
            if(current == idSel.firstChild.textContent){
                arr.splice(`${arr.indexOf(current)}`, 1);
                localStorage.setItem("values", JSON.stringify(arr));
            }
        })    
        
};

element.addEventListener("click",romover ) ;  
function vellla(e){
    e.keyCode == 13 ? getValue():""; 
};
document.addEventListener("keypress", vellla);
btn.addEventListener("click", getValue);
display(arr)