const ramDom = document.getElementById("ramDom")

const getColor = ()=>{
    const color =Math.floor(Math.random() * 16777215).toString(16);
    const color1 = "#" + color
    document.getElementById("name").innerHTML = color1
    document.body.style.backgroundColor = color1
}
ramDom.addEventListener("click",() =>{
    getColor()
})

getColor()
