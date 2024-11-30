// Type function for animation of web developer ,programmer, web designer text
let navSlide = document.querySelector(".nav2");


const textElement = document.getElementById("elements");
const strings = ["Programmer", "Web Developer", "Web Designer"];
let index = 0;
let charIndex = 0;

function type(){
  if(charIndex<strings[index].length){
    textElement.textContent += strings[index][charIndex];
    charIndex++;
    setTimeout(type, 50);
  }
  else{
    setTimeout(deleteText, 100);
  }
}

function deleteText(){
  if(charIndex>0){
  textElement.textContent = strings[index].substring(0,charIndex-1);
  charIndex--;
  setTimeout(deleteText, 100);
  }
  else{
    index=(index+1)%strings.length;
  setTimeout(type, 50);
  }
}
type();
