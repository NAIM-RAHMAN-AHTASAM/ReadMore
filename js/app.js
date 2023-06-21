
        let button = document.querySelector("button")
        let main = document.querySelector(".main")
        let text = document.querySelector(".text")

       let textDetailes = text.innerHTML
       console.log(textDetailes.length);
    

        text.style.display = "none"
       let p = document.createElement('p')
       let p2 = document.createElement('p')
    

       main.appendChild(p)
       main.appendChild(p2)
       p.classList.add("pTag1")
       p2.classList.add("pTag2")
       let first= document.querySelector(".pTag1")
       let last= document.querySelector(".pTag2")

       for(i=0;i<textDetailes.length;i++){
            if(i<(textDetailes.length/2)){
              first.innerHTML += textDetailes.charAt(i)
            }
            if(i>(textDetailes.length/2)){
              last.innerHTML += textDetailes.charAt(i)
            }
}





button.addEventListener("click",()=>{
  p2.classList.toggle("pTag2")
  // console.log(p.classList);
  if(button.innerHTML.toLowerCase() === "read more"){
        button.innerHTML = "Read less"
  }else{
        button.innerHTML = "Read More"

  }
  
})



 