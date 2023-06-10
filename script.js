const boxes =document.querySelectorAll(".container"),
     image = document.querySelector(".image"),
     text=document.querySelector(".text")
    console.log(boxes,image)

boxes.forEach((box)=>{
    // Drag Image
    box.addEventListener("dragover",(e)=>{
        e.preventDefault()
        image.classList.add("hovered")
        text.innerHTML=`Dragover on ${e.target.id}`
    })
    box.addEventListener("dragleave",()=>{
        box.classList.remove("hovered")
    })
    // Dropping Image
    box.addEventListener("drop",(e)=>{
        box.appendChild(image)
        image.classList.remove("hovered")
        text.innerHTML=`Dragged to ${e.target.id}`
    })
})
// Reset Button
const reset=(e)=>{
    const box=document.getElementById("box1")
    console.log("clicked");
    box.appendChild(image);
    text.innerHTML="Drag the image to other box"
}