let boxes = document.querySelectorAll(".all .box")
let btns = document.querySelectorAll(".all button")
console.log(boxes);
console.log(btns);

btns[0].onclick = function(){
    // boxes[0].style.backgroundColor = "darkBlue"
    boxes[0].classList.add("activeClassBlue")
}

btns[1].onclick = function(){
    // boxes[1].style.backgroundColor = "darkGreen"
    boxes[1].classList.toggle("activeClassGreen")
}

btns[2].onclick = () => {
    // boxes[2].style.backgroundColor = "darkRed"
    boxes[2].classList.toggle("activeClassRed")
}